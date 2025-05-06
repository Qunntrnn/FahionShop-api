const UserService = require("../service/UserService");

const CreateUser = async (req, res) => {
  try {
    console.log(req.body);
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
