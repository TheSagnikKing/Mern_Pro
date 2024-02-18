const User = require('../../models/Admin/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET = "ACCESS_TOKEN_SECRET"
const REFRESH_TOKEN_SECRET = "REFRESH_TOKEN_SECRET"


// @desc Login
// @route POST /auth
// @access Public
const adminLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({ email,role: 'Admin' }).exec()

    if (!foundUser ) {
        return res.status(401).json({ message: 'Unauthorized Admin' })
    }

    const match = await bcrypt.compare(password, foundUser.password)

    if (!match) return res.status(401).json({ message: 'Unauthorized Admin' })

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "email": foundUser.email,
                "role": foundUser.role
            }
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: '20s' }
    )

    const refreshToken = jwt.sign(
        { "email": foundUser.email,"role": foundUser.role },
        REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    // Create secure cookie with refresh token 
    res.cookie('AdminRefreshToken', refreshToken, {
        httpOnly: true, //accessible only by web server 
        // secure: true, //https
        // sameSite: 'None', //cross-site cookie 
        maxAge: 1 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    })

    // Send accessToken containing username and roles 
    res.json({ accessToken })
}

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const adminRefresh = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.AdminRefreshToken) return res.status(401).json({ message: 'Unauthorized Admin' })

    const refreshToken = cookies.AdminRefreshToken

    jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden Admin' })

            const foundUser = await User.findOne({ email: decoded.email }).exec()

            if (!foundUser) return res.status(401).json({ message: 'Unauthorized Admin' })

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "email": foundUser.email,
                        "role": foundUser.role
                    }
                },
                ACCESS_TOKEN_SECRET,
                { expiresIn: '20s' }
            )

            res.json({ accessToken })
        }
    )
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const adminLogout = (req, res) => {
    //cookie parse na use korle ata kaj korbe na
    const cookies = req.cookies
    if (!cookies?.AdminRefreshToken) return res.sendStatus(204) //No content
    res.clearCookie('AdminRefreshToken', { 
        httpOnly: true, 
        // sameSite: 'None', 
        // secure: true 
    })
    res.json({ message: 'Admin Cookie cleared' })
}


// @desc Register Admin
// @route POST /auth/register
// @access Public
const registerAdmin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email,role: 'Admin' }).exec()

    if (existingUser) {
        return res.status(409).json({ message: 'Admin Email already exists' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const newUser = new User({
        email,
        password: hashedPassword,
        role:"Admin"
    })

    await newUser.save()

    res.status(201).json({ message: 'Admin registered successfully' })
}

// @desc Update Admin
// @route PUT /auth/update
// @access Private - Admin can update their own information
const updateAdmin = async (req, res) => {
    const { email, name, mobileNumber, gender} = req.body

    if (!name || !mobileNumber || !gender || !email ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check if the provided email and password match any existing admin
    const foundUser = await User.findOne({ email,role: 'Admin' }).exec()

    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized Admin' })
    }


    // Update user information
    foundUser.name = name
    foundUser.mobileNumber = mobileNumber
    foundUser.gender = gender

    const updatedAdmin = await foundUser.save()

    res.status(201).json({ message: 'Admin information updated successfully', updatedAdmin })
}

module.exports = {
    adminLogin,
    adminRefresh,
    adminLogout,
    updateAdmin,
    registerAdmin
}