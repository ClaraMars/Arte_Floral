// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// router.post('/refresh-token', (req, res) => {
//     console.log('post a auth refresh token');
//   const { token } = req.body;
//   if (!token) return res.sendStatus(401);

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_REFRESH_TOKEN);
//     console.log('DECODED /REFRESH', decoded);
//     if (!decoded) return res.sendStatus(401);
//     const accessToken = jwt.sign({ user: decoded.user }, process.env.JWT_SECRET_TOKEN, { expiresIn: '1h' });
//     res.json({ token: accessToken });
//     console.log('TOKEN REFRESH OK!', accessToken);
//   } catch (error) {
//     res.sendStatus(401);
//   }
// });

// module.exports = router;