const jwt = require('jsonwebtoken');

const authMiddlware = async(req, res, next) => {
    let token;

    //check auth header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    //token not available
    if (!token) {
        return res.status(401).josn({
            success: false,
            message: 'Not authorized, token missing'
        });
    }

    //verify token
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch(error) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized, token invalid or expired.'
        });
    }
};

module.exports = authMiddlware