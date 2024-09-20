const router = require("express").Router();
const defaultController = require("./controllers/default");
const appointmentController = require("./controllers/appointment");

// Default Controller
router.post("/addOne/:type", defaultController.addOne);
router.post("/addMany/:type", defaultController.addMany);
router.post("/findOne/:type/:id", defaultController.findOne);
router.post("/findMany/:type", defaultController.findMany);
router.post("/update/:type/:id", defaultController.updateOne);

//Appointment Controller
router.post("/addAppointment/:type", appointmentController.addAppointment);

module.exports = router;
