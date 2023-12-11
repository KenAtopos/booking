import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/some", verifyToken, (req, res, next) => {
  res.send("hello");
});

router.get("/some/:id", verifyUser, (req, res, next) => {
  res.send("some annotation.");
});

// update
router.put("/:id", updateUser);

// delete
router.delete("/:id", deleteUser);

// get
router.get("/:id", getUser);

// getAll
router.get("/", getUsers);

export default router;
