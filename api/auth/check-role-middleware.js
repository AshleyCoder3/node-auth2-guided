
module.exports = function (req, res, next) { //call back
  const { decodedJwt } = req;

  if (decodedJwt.role === 'admin') {
    next();
  } else {
    next({
      status: 403,
      message: 'You have no power over me!'
    });
  }

};