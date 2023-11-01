import express from "express";
import binsRouter from "./bins.js";

import auth from "../middlewares/auth.js";
// import moment from "moment";

const router = express.Router();
router.use(auth);

// For adding default time => From - To
// router.use((req, _, next) => {
//   if (!req.query.from)
//     req.query.from = moment().format().split("T")[0] + "T00:00";
//   next();
// });

router.use("/bins", binsRouter);

export default router;
