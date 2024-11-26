const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./src/utils/database');
const bcrypt = require('bcrypt');
const User = require('./src/models/userModel'); // Adjust path if needed

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/sessions', require('./src/routes/sessionRoutes'));
app.use('/api/admin', require('./src/routes/adminRoutes'));
app.use('/api/notifications', require('./src/routes/notificationRoutes'));
app.use('/api/reports', require('./src/routes/reportRoutes'));

// Function to create default admin if it doesn't exist
const createDefaultAdmin = async () => {
  const adminUser = await User.findOne({ where: { role: 'admin' } });

  if (!adminUser) {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash('admin123', 10); // Change default password as needed

    // Create default admin
    await User.create({
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
    });

    console.log('Default admin created!');
  } else {
    console.log('Admin user already exists.');
  }
};

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log('Database connected!');

  // Create default admin if none exists
  createDefaultAdmin().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
});
