const {Router} = require("express")
const passport = require("passport")
const User = require("../models/User")

const router = Router()
router.get('/user',(req,res)=>{
    if(req.user){
        res.json({user:{username:req.user.username}})
    }else{
        res.json({user: null})
    }
})
router.post('/sign-up',async (req,res,next)=>{
    const {username,password} = req.body
    try{
        await User.register({username},password)
    }catch(error){
        if(error.name == 'UserExistsError'){
            return res.status(400).json({ message :'UserExistsError'})
        }
        return res.status(500).json({ message :'The server error'})

    }
    next()
},passport.authenticate('local'),(req,res)=>{
    res.json({user:{username:req.user.username}})
})
router.post('/logout',(req,res)=>{
    if(req.user){
        req.logOut()
        res.json({message:"Logged out"})
    }else{
        res.json({message:'No user found'})
    }
})
router.post('/login',passport.authenticate('local'),(req,res)=>{
    res.json({user:{username:req.user.username}})
})
router.post('/reset-password',(req,res,next)=>{
   if(!req.user) {
       return res.send({message:"no authenticated user found"})
   }
   next()
},async(req,res)=>{
    const {oldPassword,newPassword} = req.body
    if(!oldPassword || !newPasswor){
        return res.status(400).json({message:'Invalid Request please provide the valid input.'})
    }
    try{
        const user = await User.findById(req.user._id)
        await user.changePassword(oldPassword,newPassword)
        res.json({message:'password changed successfully'})
    }catch(error){
        if(error.name == 'IncorrectPasswordError'){
            return res.status(400).json({message:'IncorrectPasswordError'})
        }
        return res.status(500).json({message:'There was an error'})
    }
})




module.exports = router