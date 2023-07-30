const User = require('../models/user.model.js')

exports.home = (req, res)=>{
    res.send("<h1>Home Response</h1>")
}

exports.createUser = async (req, res)=>{
    try {
        
        const {name, email} = req.body
        
        if(!name || !email){
            throw new Error ('name and email are required')
        }

        // check if user is already regestered
        const userExists= await User.findOne({email})

        if(userExists){
            throw new Error('User already exists')
        }

        const user = await User.create({
            name ,
            email
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, 
            message: error.message
        })
    }
}


exports.getUser = (req, res)=>{}
exports.editUser = (req, res)=>{}
exports.deleteUser = (req, res)=>{}