const User = require('../models/User');

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getUserInfo };
