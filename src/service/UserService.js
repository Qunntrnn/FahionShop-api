const User = require('../models/User')
const createUser = (newUser) => {
  
  return new Promise( async (resolve, reject) => {
    const {userName , email, password, confirmPassword, phone} = newUser
    try {
      const checkUser = await User.findOne({
        email: email
      })
      if(checkUser !== null) {
        resolve({
          status: 'OK',
        message: 'The email is already'
        })
      }

      const createdUser = await User.create({
        userName , 
        email, 
        password, 
        confirmPassword, 
        phone
      })
      if(createdUser) {
        resolve({
          status : 'OK',
          message : 'SUCCESS',
          data : createdUser
        })
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createUser,
};
