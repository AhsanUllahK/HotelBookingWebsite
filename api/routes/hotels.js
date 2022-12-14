import express from "express";
import Hotel from '../models/Hotel.js';



const router = express.Router();

// Create
router.post("/", async (req,res)=>{
    
    const newHotel = new Hotel(req.body);

    try{
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
    }
    catch(err){
        res.status(500).json(err)
    }
});



// Update

router.put("/:id", async (req,res)=>{
    
    try{
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new : true})
    res.status(200).json(updateHotel);
    }
    catch(err){
        res.status(500).json(err)
    }
});


// Delete


router.delete("/:id", async (req,res)=>{
    

    try{
   await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
    }
    catch(err){
        res.status(500).json(err)
    }
});


// GET

router.get("/:id", async (req,res)=>{
    
    try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET ALL


router.get("/", async (req,res, next)=>{
    console.log("Hi  im in a Hotel router")
    return next()
    
    try{
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
    }
    catch(err){
        res.status(500).json(err)
    }
});







export default router

