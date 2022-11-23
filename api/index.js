import dotenv from 'dotenv';
import mongoose from "mongoose";
import express from "express";
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
// import roomsRoute from './routes/rooms.js';



const app = express();
const port = 8000;

dotenv.config({
    path: "./.env"
});

const connect = async () =>{
    try{
        console.log(process.env.MONGO)
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB network completed");;
    }
        catch(error){
        throw error;
    }
};

await connect();

mongoose.connection.on("disconnected", (req,res)=>{
    // res.send("MongoDB is disconnected");
    console.log("MongoDB is disconnected");
})

mongoose.connection.on("connected", (req, res) =>{
    // res.send("MongoDB is connected");
    console.log("MongoDB is connected");
})

// app.get("/" , (req,res)=>{
//     res.send("This is Ahsan from Booking App");

//   // req ==>  
//     // res ==> 
// });




// middlewares




app.use(express.json())

app.use("/api/auth", authRoute); 
// app.use("/api/users", usersRoute);
// app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.use((req, res)=>{
    res.send("Hello from Middleware within index.js")
})


app.use((req, res,next) =>{
    console.log("I am middleware");
})


app.listen(port, () => {
    connect()
    console.log(`Example app listening on the port ${port}!`)
})








// localhost:8000/api/hotels
