const express = require("express")

const router = express.Router()

const { signinFunction, signupFunction } = require("../controllers/controller")

router.get("/signin", signinFunction)
router.post("/signup", signupFunction)



module.exports = router;