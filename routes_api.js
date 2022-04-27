const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.json({
        miPrimerApi: "works!"
    })
})

module.exports = router;