const router = require("express").Router();
const authRoutes = require("./auth.routes");
const PropertiesRoutes = require("./properties.routes");
const requestRoutes = require("./requestInfo.routes")
/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Final proyect");
});

router.use("/auth", authRoutes);

router.use("/properties", PropertiesRoutes);
router.use("/request", requestRoutes);
// router.use("/profile", ProfileRoutes);


module.exports = router;
