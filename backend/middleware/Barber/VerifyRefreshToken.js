const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET_BARBER = "ACCESS_TOKEN_SECRET_BARBER"

const verifyRefreshToken = (req, res, next) => {

    // accessToken aschena atar dutoi way ache either user page refresh koreche tai access token uregech or
    // refresh token expire kore geche tai access token generate hochena
    
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized Barber' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        ACCESS_TOKEN_SECRET_BARBER,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden Barber' })
            req.barberemail = decoded.UserInfo.email
            req.role = decoded.UserInfo.role
            next()
        }
    )
}

module.exports = verifyRefreshToken 