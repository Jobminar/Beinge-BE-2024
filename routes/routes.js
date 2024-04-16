import express from "express";
import multer from "multer";
import userController from "../controllers/userController.js";
import blogsController from "../controllers/blogsController.js";
import slotController from "../controllers/slotController.js";
import cakeController from "../controllers/cakeController.js";
import decorationController from "../controllers/decorationController.js";
import orderController from "../controllers/orderController.js";
import loginController from "../controllers/loginController.js";
import dateTimeController from "../controllers/dateTimeController.js";
import reportsController from "../controllers/reportsController.js";
import typeOfTheater from "../controllers/typeOfTheaterController.js";
import bookingsController from "../controllers/bookingsController.js";
import miniTheaterController from "../controllers/miniTheaterController.js";
import maxiTheaterController from "../controllers/maxiTheatreController.js";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();

router.post("/signup", loginController.signup);
router.post("/login", loginController.login);

router.post("/postreports",reportsController.createReports)
router.get("/getreports",reportsController.getReports)

router.post("/posttheaterdata", typeOfTheater.createTypeOfTheater);
router.post("/gettheaterdata", typeOfTheater.getAllTypesOfTheaters);

router.post("/users", userController.createUser);
router.get("/getusers", userController.getUsers);

router.get("/getslots", slotController.getSlots);
router.post("/postslots", slotController.createSlot);
router.delete("/slots/:id", slotController.deleteSlot);

router.get("/getcakes", cakeController.getCakes);
router.post("/postcakes", cakeController.createCake);
router.delete("/cakes/:cakeId", cakeController.deleteCake);

router.get("/getdecorations", decorationController.getDecorations);
router.post('/postdecorations', upload.single('image'), decorationController.createDecoration);
router.delete("/decorations/:id", decorationController.deleteDecoration);

router.get("/getorders", orderController.getOrders);
router.post("/postorders", orderController.createOrder);
router.delete("/deleteorders/:id", orderController.deleteOrder);

router.get("/getbookings",bookingsController.getBookings);
router.post("/postbookings",bookingsController.createBookings);
router.delete('/deletebookings/:id',bookingsController.deleteBookings);

router.post("/postblogs", blogsController.createBlog);

router.get("/getblogs", blogsController.getBlogs);
router.delete('/deleteblog/:id', blogsController.deleteBlog);

router.post("/postmaxi", maxiTheaterController.addTheater); 
router.get("/getmaxi",maxiTheaterController.getTheaters)
router.delete("/maxi/:id",maxiTheaterController.deleteTheater)
router.put("/updatemaxi/:id", maxiTheaterController.updateTheater);
router.patch("/updatemaxi/:id", maxiTheaterController.updateTheater);

router.post("/postmini", miniTheaterController.addTheater); 
router.get("/getmini",miniTheaterController.getTheaters)
router.delete("/mini/:id",miniTheaterController.deleteTheater)
router.put("/updatemini/:id", miniTheaterController.updateTheater);
router.patch("/updatemini/:id", miniTheaterController.updateTheater);


router.post("/postdatetime",dateTimeController.addBatchData)
router.get("/getdatetime",dateTimeController.getAllBatch)
router.delete("/deletedatetime/:id",dateTimeController.deleteBatchData)
router.delete("/deletealldatetime",dateTimeController.deleteAllBatchData)

export default router;
