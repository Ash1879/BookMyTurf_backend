const User  = require("../models/userModel.js");


const userController = async(req,res,next) =>{
    try {
        console.log(req.body)

        const {name,email,password,mobile} = req.body;      //body data de_structuring

        if (!name || !email || !password || !mobile){
            return res.status(400).json({message:"All fields are required"})
        }

        const userAlreadyExist = await User.findOne({email}).exec();
           console.log(userAlreadyExist, "")

            if(userAlreadyExist){
                return res.status(400).json({error:"User Already Exist"})
            }

        const newUser = new User({
            name,email,password,mobile
        })

        const savedUser = await newUser.save()
            if(savedUser){
                return res.status(200).json({message: "user registration successfully", savedUser})
            }
            return res.status(400).json({error: "something went wrong"})

        

    } catch (error) {
        
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "Internal server Error"})

    }
    
}
module.exports = {userController}