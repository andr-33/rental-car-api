const express = require('express');

const router = express.Router();

router.get("/all-cars", (req, res)=>{
    res.json({});
})

module.exports = router;