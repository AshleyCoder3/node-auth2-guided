const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/index');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next({
    status: 401,
    message: 'We wants token!!'
  });
  jwt.verify( //cant async it doesn't return a promise
    token,
    JWT_SECRET,
    (err, decoded) => {
      if (err) return next({
        status: 401,
        message: 'token bad!',
        realErrorMessage: err.message
      });
      req.decodedJwt = decoded;
      next();
    }
  );

};
