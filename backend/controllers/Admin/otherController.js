const mongoose = require('mongoose');
const Salon = require("../../models/Admin/Salon")

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

const createSalon = async(req,res) => {
    try {
        const { adminEmail, salonName, city, country, services } = req.body

        if(!adminEmail){
            return res.status(404).json({ message: "AdminEmail Is Not Present "})
        }

        if(!salonName || !city || !country || !services || !adminEmail){
            return res.status(404).json({ message:"All Salon Fields Required"})
        }

        const newSalon = await Salon.create({
            adminEmail,
            salonName,
            city,
            country,
            services
        })

        if(newSalon){
            res.status(201).json({ 
                success:true,
                newSalon
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const salonList = async(req,res) => {
    try {
        const { adminEmail } = req.query

        if(!adminEmail){
            return res.status(404).json({ message: "AdminEmail Is Not Present "})
        }

        const salon = await Salon.find({adminEmail:adminEmail})

        if(!salon){
            return res.status(404).json({ message: "No Salon Present For This Current AdminEmail"})
        }

        res.status(201).json({
            success:true,
            salon
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateSalon = async (req, res) => {
    try {
        const { adminEmail, salonName, city, country, services, salonId } = req.body;

        if (!adminEmail) {
            return res.status(404).json({ message: "AdminEmail Is Not Present" });
        }

        if (!salonId) {
            return res.status(404).json({ message: "SalonId is not Present" });
        }

        // Use findOne instead of find to get a single document
        const salon = await Salon.findOne({ adminEmail, _id:salonId });
        
        console.log(salon)

        if (!salon) {
            return res.status(404).json({ message: "Salon is not Present" });
        }

        // Update salon properties if they exist in the request body
        salon.salonName = salonName || salon.salonName;
        salon.city = city || salon.city;
        salon.country = country || salon.country;
        salon.services = services || salon.services;

        // Save the changes
        await salon.save();

        return res.status(200).json({
            success: true,
            salon,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const deleteSalon = async (req, res) => {
    try {
        const salonId = req.query.salonId;  // Access the salonId from req.query

        if (!salonId) {
            return res.status(404).json({
                message: "SalonId is not present in the query parameters"
            });
        }

        const deletedSalon = await Salon.findByIdAndDelete(salonId);

        if (!deletedSalon) {
            return res.status(404).json({
                message: `Salon with this ${salonId} not found`
            });
        }

        res.status(200).json({
            message: `Salon with this ${salonId} deleted successfully`
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};



module.exports = {
    adminHomeController,
    adminSalonController,
    createSalon,
    salonList,
    updateSalon,
    deleteSalon
}