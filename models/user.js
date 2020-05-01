const mongoose = require("mongoose");

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

const user = mongoose.model("user", userSchema); // model은 schema를 감싸주는 역할

module.exports = { user }; // 다른 곳에서 사용할 수 있게 export
