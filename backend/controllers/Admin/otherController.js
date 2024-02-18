const adminHomeController = (req,res) => {

    if(req.adminemail && req.role){
        res.status(200).json({
            message:"You are successfully present in the admin Dashoard",
            email:req.adminemail,
            role:req.role
        })
    }else{
        res.status(404).json({message:"You are not authorize admin"})
    }
    
}

const adminSalonController = (req,res) => {

    if(req.adminemail && req.role){
        res.status(200).json({
            message:"Admin is now present in the Salon Dashboard",
            email:req.adminemail,
            role:req.role
        })
    }else{
        res.status(404).json({message:"You are not authorize admin"})
    }

}

module.exports = {
    adminHomeController,
    adminSalonController
}