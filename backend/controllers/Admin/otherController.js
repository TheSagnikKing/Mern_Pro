const adminHomeController = (req,res) => {
    res.status(200).json({
        message:"You are successfully present in the admin Dashoard"
    })
}

const adminSalonController = (req,res) => {
    res.status(200).json({
        message:"Admin is now present in the Salon Dashboard"
    })
}

module.exports = {
    adminHomeController,
    adminSalonController
}