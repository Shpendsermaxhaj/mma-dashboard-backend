const fighterModel = require('../models/fighterModel');

const getAllFighters = async () => {
    return await fighterModel.getAllFighters();
};

const getFighterById = async (id) => {
    const fighter = await fighterModel.getFighterById(id);
    if (!fighter) {
      throw new Error('Fighter not found');
    }
    return fighter;
};

const createFighter = async (fighter) => {
    return await fighterModel.createFighter(fighter);
};

const updateFighter = async (id, fighter) => {
    const updatedFighter = await fighterModel.updateFighter(id, fighter);
    if (!updatedFighter) {
      throw new Error('Fighter not found');
    }
    return updatedFighter;
};

const deleteFighter = async (id) => {
    const deletedFighter = await fighterModel.deleteFighter(id);
    if (!deletedFighter) {
      throw new Error('Fighter not found');
    }
    return deletedFighter;
};

module.exports = {
    getAllFighters,
    getFighterById,
    createFighter,
    updateFighter,
    deleteFighter
};
