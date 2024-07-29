const express = require("express");
const { login } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/callback", login);
module.exports = router;