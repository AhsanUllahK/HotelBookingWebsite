import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("Hello this is khan");
});

// router.get("/rooms", (req, res) =>{
//     res.send("This is rooms page");
// });

// router.get("/hotels", (req, res)=>{
//     res.send("This is hotels page");
// })

// router.get("/users", (req, res)=>{
//     res.send("This is users page");
// })

export default router