const express = require("express");
const { param } = require("express-validator");
const { getFighters, getFighterById } = require("../controllers/userController");

const router = express.Router();

router.get("/", getFighters);
router.get(
    "/:id",
    param("id").isInt().withMessage("ID must be an integer"),
    getFighterById
);

module.exports = router;
