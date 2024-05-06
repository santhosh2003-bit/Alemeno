const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.model('userSchema'); // Ensure this is correctly defined in your model file
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require('../keys');

// POST /signup - Register a new user
router.post('/signup', (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !userName || !email || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    userSchema.findOne({ $or: [{ email: email }, { userName: userName }] }).then((existingUser) => {
        if (existingUser) {
            return res.status(422).json({ error: "User already exists with that email or username" });
        }
        bcrypt.hash(password, 12).then(hashedPassword => {
            const user = new userSchema({
                name,
                userName,
                email,
                password: hashedPassword,
            });
            user.save()
                .then(user => {
                    res.json({ message: "Registered successfully" });
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ error: "Failed to register user" });
                });
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    });
});


router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all fields" });
    }
    userSchema.findOne({ email: email }).then(savedUser => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email or password" });
        }
        bcrypt.compare(password, savedUser.password)
       
        .then(doMatch => {
            if (doMatch) {
                const token = jwt.sign({ _id: savedUser._id }, JWT_KEY);
                res.json({ 
                    token:token,
                    user:{
                        _id:savedUser._id,
                        name:savedUser.name
                    }
                
                });
            } else {
                return res.status(422).json({ error: "Invalid email or password" });
            }
        }).catch(err => {
            console.error(err);
            res.status(500).json({ error: "Server error during authentication" });
        });
    });
});

router.post('/enroll',(req,res)=>{
    const {userId,courseId}=req.body;
    userSchema.findById(userId).then((user)=>{
        if(!user){
            return res.status(404).json({ error: "User not found" });
        }
        if(!user.courses.includes(courseId)){
            user.courses.push(courseId);
            user.save().then(() => {
                res.json({ message: "Enrolled successfully" });
            }).catch(err => {
                console.error(err);
                res.status(500).json({ error: "Could not enroll in course" });
            });
        }
        else {
            res.status(400).json({ message: "Already enrolled in this course" });
        }
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    });
})
router.get('/user/:userId', (req, res) => {
    userSchema.findById(req.params.userId).then(user => {
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({
            ...user._doc,
            courses: user.courses  // This will be an array of course IDs
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    });
});


module.exports = router;
