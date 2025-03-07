const { validationResult } = require("express-validator");

const mockFighters = [
    { id: 1, name: "Jon Jones", wins: 27, losses: 1, kos: 10, submissions: 7 },
    { id: 2, name: "Israel Adesanya", wins: 24, losses: 3, kos: 16, submissions: 0 },
];

// Get all fighters
exports.getFighters = (req, res) => {
    try {
        res.json(mockFighters);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch fighters" });
    }
};

// Get fighter by ID with validation
exports.getFighterById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const fighter = mockFighters.find((f) => f.id === id);

        if (!fighter) {
            return res.status(404).json({ error: "Fighter not found" });
        }

        res.json(fighter);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving fighter" });
    }
};
