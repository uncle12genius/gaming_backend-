const Session = require('../models/sessionModel');

exports.generateReport = async (req, res) => {
  try {
    const reportData = await Session.findAll({
      attributes: ['id', 'userId', 'startTime', 'endTime', 'paidAmount'],
    });
    res.status(200).json(reportData);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
