const Session = require('../models/sessionModel');

exports.createSession = async (req, res) => {
  const { userId, startTime, endTime, paidAmount } = req.body;
  try {
    const session = await Session.create({ userId, startTime, endTime, paidAmount });
    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateSession = async (req, res) => {
  const { id } = req.params;
  const { endTime } = req.body;

  try {
    const session = await Session.findByPk(id);
    if (!session) return res.status(404).json({ message: 'Session not found' });

    session.endTime = endTime;
    await session.save();

    res.status(200).json(session);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

