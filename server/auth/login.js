const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel.js');

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role,
    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '7d' });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (passwordMatch) {
            const accessToken = generateAccessToken(user._id, 'user');
            return res.status(200).json({
                message: 'Login successful',
                accessToken,
            });
        } else {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(`Error with retrieving user ${error.message}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    login,
};