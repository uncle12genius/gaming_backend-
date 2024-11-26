const User = require('../models/userModel');

exports.registerStaff = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const staff = await User.create({ username, password: hashedPassword, role });
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
