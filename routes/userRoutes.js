const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
router
  .routes("/")
  .get(userController.getAllusers)
  .post(userController.createNewusers)
  .patch(userController.updateusers)
  .delete(userController.deleteusers);
module.exports = router;
