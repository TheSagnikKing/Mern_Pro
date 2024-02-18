const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET"

const verifyRefreshToken = (req, res, next) => {

    // accessToken aschena atar dutoi way ache either user page refresh koreche tai access token uregech or
    // refresh token expire kore geche tai access token generate hochena
    
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized Admin' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden Admin' })
            req.adminemail = decoded.UserInfo.email
            req.role = decoded.UserInfo.role
            next()
        }
    )
}

module.exports = verifyRefreshToken 