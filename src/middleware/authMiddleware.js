const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log('Authorization header:', req.header('Authorization'));  // Log the incoming Authorization header
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded token (user info) to the request object
    next();
  } catch (err) {
    console.log('Token verification failed:', err.message);  // Log token verification errors
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;
