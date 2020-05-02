const express = require("express"); // express 가져오기
const app = express();
const port = 5000; // port는 임의지정
const bodyParser = require("body-parser");
const { user } = require("./models/user");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded 분석해서 가져옴
app.use(bodyParser.json()); // application/json

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

app.post("/register", (req, res) => {
  // 회원가입 정보들을 client에서 가져오면 데이터베이스에 넣기
  const userNew = new user(req.body); // bodyParser를 활용해서 req.body 활용 가능

  // save 전에 비밀번호 암호화(user.js)

  userNew.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  }); // mongodb method
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
