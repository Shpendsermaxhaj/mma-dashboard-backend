const { param, body } = require("express-validator");

const validateFighterId = [
    param("id").isInt().withMessage("ID must be an integer")
];

const validateFighterBody = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("wins").isInt({ min: 0 }).withMessage("Wins must be a non-negative integer"),
    body("losses").isInt({ min: 0 }).withMessage("Losses must be a non-negative integer"),
    body("kos").isInt({ min: 0 }).withMessage("KOs must be a non-negative integer"),
    body("submissions").isInt({ min: 0 }).withMessage("Submissions must be a non-negative integer")
];

module.exports = {
    validateFighterId,
    validateFighterBody
};
