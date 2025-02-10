import express from "express";
import multer from "multer";
import {
  addAgent,
  removeAgent,
  updateAgent,
  fetchAgents,
  loginadmin,
  logoutadmin,
} from "../controller/agentController.js";
import {
  addcard,
  fetchcards,
  removecard,
  updatecard,
} from "../controller/cardcontroller.js";

const router = express.Router();

// Set up multer storage to store uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "storage/"); // Set folder to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname); // Unique file name
  },
});
const upload = multer({ storage });

// Agent Routes
router.post("/create", addAgent);
router.delete("/removeagent/:id", removeAgent);
router.put("/update", updateAgent);
router.get("/fetch", fetchAgents);

// Card Routes
router.post("/createcard", upload.single("stataimage"), addcard); // Fix field name
 // Updated to handle file upload
 router.delete("/removecard/:id", removecard); 

 router.put("/updatecard/:id", updatecard);

router.get("/fetchcard", fetchcards);
router.post('/login', loginadmin)
router.post("/logout",logoutadmin)

export default router;
