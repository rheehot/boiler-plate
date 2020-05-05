const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; // 10자리 salt
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // trim : 스페이스바를 없애준다.
    unique: 1, // unique: 똑같은 이메일 사용불가
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  // password가 변경될 때만
  if (user.isModified("password")) {
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword 1234를 암호화해서 db 비밀번호랑 같은지 확인
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  //jsonwebtoken 이용해서 token 생성
  var token = jwt.sign(user._id.toHexString(), "secretToken");
  //user._id+"secretToken" = toekn
  //secretToken -> user._id
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  // token decode
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디를 이용해서 유저 찾고
    // 클라이언트에서 가져온 token과 db에 보관된 token 일치 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      //findOne : mongodb method
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const user = mongoose.model("user", userSchema); // model은 schema를 감싸주는 역할

module.exports = { user }; // 다른 곳에서 사용할 수 있게 export
