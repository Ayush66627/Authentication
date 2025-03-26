import {User} from "../model/user.model.js";
import bcryptjs from "bcryptjs";

 export const signup = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcryptjs.hash(password, 12);
        const createdUser = new User({username, 
        email, 
        password: hashedPassword});
        await createdUser.save();
        res.status(201).json({message: "User created successfully", user: {
            username: createdUser.username,
            email: createdUser.email,
            id: createdUser._id
        }});
    } catch (error) {
        
        res.status(500).json(error);
    }
}

   export const login = async(req, res) => {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user) return res.status(400).json({message: "User not found"});
            const isPasswordCorrect = await bcryptjs.compare(password, user.password);
            if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});
            res.status(200).json({message: "Login successful", user: {
                username: user.username,
                email: user.email,
                id: user._id
            }});
        } catch (error) {
            console.log("Error", error);
            res.status(500).json(error);
        }
    }

