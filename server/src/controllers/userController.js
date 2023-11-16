const { User } = require("../models/dbModels");

const userController = {
  registerUser: async (req, res) => {
    const usersData = req.body;
    User.create(usersData)
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },

  loginUser: async (req, res) => {
    const{password,email}=req.body;
    User.findOne({email:email})
    .then(user=>{
        if(user){
              if(user.password=password){
                const userRole = user.role;
                res.json({ status: 'Success', role: userRole.toLowerCase() });
              }else{
                res.json('The password is incorrect');
              }
        }else{
          res.json('No record existed');
        }
    })
  },
};

module.exports = userController;
