
module.exports = function (role) {
  return function (req, res, next) { //call back
    const { decodedJwt } = req;
    if (decodedJwt.role === role) {
      next();
    } else {
      next({
        status: 403,
        message: 'You have no power over me!'
      });
    }
  };
};