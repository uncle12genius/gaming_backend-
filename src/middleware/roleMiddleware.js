const authorize = (roles) => (req, res, next) => {
  console.log('User role:', req.user?.role);  // Log the user role attached by authenticate middleware
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden. Insufficient permissions.' });
  }
  next();
};

module.exports = authorize;
