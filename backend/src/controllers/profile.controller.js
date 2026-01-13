const asyncHandler = require('../utils/asyncHandler');

const profileController = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Profile fetched successfully',
        data: req.user
    });
});

module.exports = profileController;