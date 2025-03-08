const { validationResult } = require("express-validator");
const fighterService = require('../services/fighterService');

// Get all fighters
const getFighters = async (req, res, next) => {
    try {
        const fighters = await fighterService.getAllFighters();
        res.json(fighters);
    } catch (error) {
        next(error);
    }
};

// Get fighter by ID
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

// Create a new fighter
const createFighter = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const fighter = await fighterService.createFighter(req.body);
        res.status(201).json(fighter);
    } catch (error) {
        next(error);
    }
};

// Update a fighter
const updateFighter = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const fighter = await fighterService.updateFighter(req.params.id, req.body);
        res.json(fighter);
    } catch (error) {
        if (error.message === 'Fighter not found') {
            return res.status(404).json({ message: 'Fighter not found' });
        }
        next(error);
    }
};

// Delete a fighter
const deleteFighter = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const fighter = await fighterService.deleteFighter(req.params.id);
        res.status(200).json({ message: 'Fighter deleted successfully', fighter });
    } catch (error) {
        if (error.message === 'Fighter not found') {
            return res.status(404).json({ message: 'Fighter not found' });
        }
        next(error);
    }
};

module.exports = {
    getFighters,
    getFighterById,
    createFighter,
    updateFighter,
    deleteFighter
};