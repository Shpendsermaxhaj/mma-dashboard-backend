const { validationResult } = require("express-validator");
const fighterService = require('../services/fighterService');

const getFighters = async (req, res, next) => {
    try {
        const fighters = await fighterService.getAllFighters();
        res.json(fighters);
    } catch (error) {
        next(error);
    }
};

const getFighterById = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const fighter = await fighterService.getFighterById(req.params.id);
        res.json(fighter);
    } catch (error) {
        if (error.message === 'Fighter not found') {
            return res.status(404).json({ message: 'Fighter not found' });
        }
        next(error);
    }
};

module.exports = {
    getFighters,
    getFighterById
};
