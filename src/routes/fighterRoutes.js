const express = require("express");
const fighterController = require("../controllers/fighterController");
const { validateFighterId } = require("../middleware/validators");

const router = express.Router();

router.get("/", fighterController.getFighters);
router.get("/:id", validateFighterId, fighterController.getFighterById);

module.exports = router;
