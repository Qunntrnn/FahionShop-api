const UserService = require("../service/UserService");

const CreateUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const res = await UserService.createUser();
    return res.status(200).json();
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  CreateUser,
};
