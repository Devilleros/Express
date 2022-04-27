const express = require("express");
const router = express.Router();

//rutas
router.get("/", (req, res) => {
    res.render("index.ejs");
   // res.end("hola Mundo");
});

router.get("/login" , (req, res) => {
    res.render("login")
    //res.end("Aquí va un login");
})



module.exports = router;