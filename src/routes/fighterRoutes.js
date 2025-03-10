const express = require("express");
const { param, body } = require("express-validator");
const fighterController = require("../controllers/fighterController");
const { validateFighterId, validateFighterBody } = require("../middleware/validators");

const router = express.Router();

// Routes
router.get("/", fighterController.getFighters);
router.get("/:id", validateFighterId, fighterController.getFighterById);
router.post("/", validateFighterBody, fighterController.createFighter);
router.put("/:id", [...validateFighterId, ...validateFighterBody], fighterController.updateFighter);
router.delete("/:id", validateFighterId, fighterController.deleteFighter);

module.exports = router;