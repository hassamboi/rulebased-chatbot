const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// user routes
router.post("/register", userController.user_register);
router.post("/login", userController.user_login);

module.exports = router;
