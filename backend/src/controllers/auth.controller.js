const asyncHandler = require('../utils/asyncHandler');
const { registerUser, loginUser } = require('../services/auth.service');

const registerController = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const user = await registerUser({ name, email, password });

    return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: user
    });
});

const loginController = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    
    const result = await loginUser({ email, password });

    res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result
    });
});

module.exports = {
    registerController,
    loginController
};