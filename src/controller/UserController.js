const UserService = require("../service/UserService");

const CreateUser = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword, phone } = req.body;
    const reg = /^\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const isCheckEmail = reg.test(email)
    
    if (!userName || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      })
      
    }else if(!isCheckEmail) {
      return res.status(200).json({
        status : 'ERR',
        message : 'The input is email'
      })
    } else if(password !== confirmPassword) {
      return res.status(200).json({
        status : 'ERR',
        message : "The password is equal confirmPassword"
      })
    }
    console.log("🚀 ~ CreateUser ~ isCheckEmail:", isCheckEmail)
    const response = await UserService.createUser(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  CreateUser,
};
