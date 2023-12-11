//just js file that exports all the function
const {User} = require('../models/user');
const httpStatus = require('http-status');
const {ApiError} = require('../middleware/apiError');


const createUser = async(email,password)=>{
    try {

        if(await User.emailTaken(email)){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry email taken')
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

const signInWithEmailAndPassword = async(email,password)=>{
    try {
        
    } catch (error) {
        
    }


}

module.exports = {
    createUser,
    genAuthToken
}