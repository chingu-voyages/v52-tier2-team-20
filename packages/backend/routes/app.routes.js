const {Router} = require("express");
const router = Router();

// Routes
router.get("/api", (req, res) =>{
    res.send({data: "Hello from backend"});
})

module.exports = router;