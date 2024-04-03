const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("./userController");
const validateToken = require("./validateTokenHandler");

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;