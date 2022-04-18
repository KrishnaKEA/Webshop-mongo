const {Router} = require("express")
const passport = require("passport")
const User = require("../models/User")


const router = Router()
router.get('/user',(req,res)=>{
    if(req.user){
        console.log(req.user)
        res.json({user:{username:req.user.username}})
    }else{
        res.json({user: null})
    }
})
router.post('/sign-up',async (req,res,next)=>{
    const {username,password,sec_question,sec_answer} = req.body
    const usrDet = new User({
        username: username,
        sec_question: sec_question,
        sec_answer: sec_answer
    })
    
    try{
        await User.register(usrDet,password)

    }catch(error){
        console.log(error);
        if(error.name == 'UserExistsError'){
            return res.status(400).json({ message :'UserExistsError'})
        }
        return res.status(500).json({ message :error})

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





router.post('/reset-password',async(req,res)=>{

    const {username,sec_question,sec_answer,newPassword} = req.body
    //console.log(req.body);
    const user = userDetails.filter((usr)=>{
        usr.username == username
        
    })
    console.log(userDetails)
    if(!user){
        return res.status(400).json({message:'No user found'})
    }
    if(user.sec_question == sec_question && user.sec_answer == sec_answer){
       // console.log(user.sec_question +" "+sec_question+" "+ user.sec)
        try{
            const user = await User.findById(req.user.username)
            const oldPassword = user.password
            await user.changePassword(oldPassword,newPassword)
            res.json({message:'password changed successfully'})
        }catch(error){
            if(error.name == 'IncorrectPasswordError'){
                return res.status(400).json({message:'IncorrectPasswordError'})
            }
            return res.status(500).json({message:'There was an error'})
        }
    }else{
        return res.status(400).json({message:'your security question or answer is incorrect.'})
    }

})




module.exports = router