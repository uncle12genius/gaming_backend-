const Africastalking = require('africastalking')({
    apiKey: process.env.AT_API_KEY,
    username: process.env.AT_USERNAME,
  });
  
  const sendSMS = async (to, message) => {
    try {
      const res = await Africastalking.SMS.send({ to, message });
      console.log('SMS sent successfully:', res);
    } catch (err) {
      console.error('Error sending SMS:', err.message);
    }
  };
  
  module.exports = sendSMS;
  