const sendEmail = require('../utils/emailService');
const sendSMS = require('../utils/smsService');

exports.sendNotifications = async (req, res) => {
  const { email, phone, message } = req.body;

  try {
    if (email) await sendEmail(email, 'Notification', message);
    if (phone) await sendSMS(phone, message);

    res.status(200).json({ message: 'Notifications sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending notifications' });
  }
};
