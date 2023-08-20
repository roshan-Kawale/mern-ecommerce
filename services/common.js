const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBkMTdhNWJhY2QyNzA3MTBmNTkyZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkyNDU1Mjk3fQ.n-6DVCar0y98IEVa-GUx-oW1e4hhuGn1G1KlwbZDlKo"
  return token;
};