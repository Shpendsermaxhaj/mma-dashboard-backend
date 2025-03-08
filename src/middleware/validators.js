const { param } = require("express-validator");

const validateFighterId = [
    param("id").isInt().withMessage("ID must be an integer")
];

module.exports = {
    validateFighterId
};
