//just js file that exports all the function
const {User} = require('../models/user');


const createUser = async(email,password)=>{
    try {

        if(await User.emailTaken(email)){
            console.log('Email already on DB');
            // throw error;
        }

       const user = new User({
        email,
        password
       });
       await user.save();
       return user;
    } catch (error) {
        throw error;
    }
}


const genAuthToken = (user) =>{
    const token = user.generateAuthToken();
    return token;
}

module.exports = {
    createUser,
    genAuthToken
}