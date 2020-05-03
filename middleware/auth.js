const { user } = require("../models/user");

let auth = (req, res, next) => {
  // 인증 처리하는 곳
  // 클라이언트 쿠키에서 토큰 가져옴
  let token = req.cookies.x_auth;

  // 토큰을 복호화 후 유저 찾기
  user.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token; // index.js 에서 req로 접근 가능
    req.user = user;
    next();
  });
  // 유저가 있으면 인증 완료
  // 유저가 없으면 인증 실패
};

module.exports = { auth };
