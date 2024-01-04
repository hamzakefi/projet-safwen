const express = require("express") ;
const { registerAdmin,loginAdmin, updateAdminInfos, updateAdminPassword } = require("../controllers/admin");
const { getusers } = require("../controllers/user");
const isAuthAdmin = require("../middeleware/isAuthAdmin");
const isAdmin = require("../middeleware/isAdmin");
const { validation, registerValidator, loginValidator } = require("../middeleware/validator");

const router = express.Router();
router.post('/registerAdmin' , registerValidator(),validation, registerAdmin)

router.post('/loginAdmin', validation , loginValidator(), loginAdmin)
router.get ("/currentAdmin" , isAuthAdmin , (req,res) =>{res.send(req.admin)})



router.get ("/allusers" , getusers)

router.put('/:_id',updateAdminInfos) 
router.put('/password/:_id',updateAdminPassword) 



module.exports = router;