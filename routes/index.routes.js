const router = require("express").Router();
const authRoutes = require("./auth.routes");
const PropertiesRoutes = require("./properties.routes");
const requestRoutes = require("./requestInfo.routes");
// const Property1Routes = require("./property1");
// const AdminRoutes = require("./admin");
// const ProfileRoutes = require("./profile");



/* GET home page asyn*/
router.get("/", (req, res, next) => {
  res.json("Final proyect");
});

router.use("/auth", authRoutes);

router.use("/properties", PropertiesRoutes);
// router.use("/property1", Property1Routes);
router.use("/request", requestRoutes);

// router.use("/admin", AdminRoutes);
// router.use("/profile", ProfileRoutes);


module.exports = router;
