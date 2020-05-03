const express = require("express"); // express 가져오기
const app = express();
const port = 5000; // port는 임의지정
const bodyParser = require("body-parser");
const { user } = require("./models/user");
const config = require("./config/key");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded 분석해서 가져옴
app.use(bodyParser.json()); // application/json
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    // 오류 발생 방지
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Conncected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~하이")); // root directory에 오면 출력

app.post("/api/users/register", (req, res) => {
  // 회원가입 정보들을 client에서 가져오면 데이터베이스에 넣기
  const userNew = new user(req.body); // bodyParser를 활용해서 req.body 활용 가능

  // save 전에 비밀번호 암호화(user.js)
  userNew.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  }); // mongodb method
});

app.post("/login", (req, res) => {
  // 요청된 이메일을 db에서 찾기
  user.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "이메일에 해당하는 유저가 없습니다.",
      });
    }

    // 요청된 이메일이 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }

      // 비밀번호가 맞다면 token 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // token 저장
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

// role 0 -> 일반 유저, 아니면 -> 관리자 (여기서 이렇게 설정, 언제든 자신에 맞게 수정 가능)
app.get("/api/users/auth", auth, (req, res) => {
  //미들웨어 통과했다는 것은 authentication 이 true
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  user.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
