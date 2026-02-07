const AppError = require("../utils/appError");

const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user.role || !allowedRoles.includes(req.user.role)) {
      return next(new AppError("You are not authorized", 401));
    }
    next();
  };
};

module.exports = { allowRoles };
