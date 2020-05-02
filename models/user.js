const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; // 10자리 salt

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
    maxlength: 5,
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
  let user = this;

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
  }
});

const user = mongoose.model("user", userSchema); // model은 schema를 감싸주는 역할

module.exports = { user }; // 다른 곳에서 사용할 수 있게 export
