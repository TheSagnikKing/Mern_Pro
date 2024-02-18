const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET"

const verifyRefreshToken = (req, res, next) => {
    // const cookies = req.cookies

    // // If i write this line it will work perfectly but i have to handle the error individually which is not a good way
    // // Thats why create a persistLogin component which will handle this error globally 
    // if (!cookies?.AdminRefreshToken) return res.status(404).json({message:"Refresh Token not present."})

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