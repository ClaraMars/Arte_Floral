const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_TOKEN, {expiresIn: '30d'});
};

const isAuth = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send({ msg: 'Access denied' });
    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       console.log(decoded);
        req.user = decoded; 
        next();
    } catch(error){
        try {
            const tokenRefresh = req.header("auth-token-refresh");
            if (!tokenRefresh) throw new Error();
            const decoded = jwt.verify(tokenRefresh, process.env.JWT_SECRET_REFRESH_TOKEN);
            if (!decoded) throw new Error();
            console.log(decoded);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).send({ msg: 'Invalid Token' });
        }
    }
};

module.exports = { generateToken, isAuth };
