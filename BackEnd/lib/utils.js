const jwt = require('jsonwebtoken');

const generateToken = (user, isRefreshToken) => {
    if (!user) throw new Error('User is required');
    if (isRefreshToken) {
        return jwt.sign({ user }, process.env.JWT_SECRET_REFRESH_TOKEN, {
          expiresIn: "8670h",
        });
    }
    return jwt.sign({user}, process.env.JWT_SECRET_TOKEN, {expiresIn: '1m'});
};

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send({ msg: 'Access denied' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        if (!decoded) return res.status(401).send({ msg: 'Access denied' });
        req.user = decoded;
        next();
    } catch(error){
        const tokenRefresh = req.header("auth-refresh-token");
        if (!tokenRefresh) res.status(401).send({ msg: 'Access denied' });
        try {
            const decoded = jwt.verify(tokenRefresh, process.env.JWT_SECRET_REFRESH_TOKEN);
            if (!decoded) throw new Error();
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).send({ msg: 'Invalid Token' });
        }
    }
};

module.exports = { generateToken, verifyToken };
