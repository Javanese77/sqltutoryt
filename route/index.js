const express = require("express");
const router = express.Router();
const homeber = require("./home.berita");
router.use("/home", homeber);
// router.use("/home/nasional")
// router.use("/home/otomotif")
// router.use("/home/olahraga")

module.exports = router;
