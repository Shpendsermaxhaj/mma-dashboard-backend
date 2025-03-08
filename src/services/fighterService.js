const fighterModel = require('../models/fighterModel');

const getAllFighters = async () => {
    return fighterModel.getAll();
};

const getFighterById = async (id) => {
    const fighter = fighterModel.getById(id);
    if (!fighter) {
        throw new Error('Fighter not found');
    }
    return fighter;
};

module.exports = {
    getAllFighters,
    getFighterById
};
