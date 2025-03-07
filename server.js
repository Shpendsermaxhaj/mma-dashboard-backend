const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Mock UFC Data
const fighters = [
    { id: 1, name: "Jon Jones", wins: 27, losses: 1, kos: 10, submissions: 7 },
    { id: 2, name: "Israel Adesanya", wins: 24, losses: 3, kos: 16, submissions: 0 },
    { id: 3, name: "Khabib Nurmagomedov", wins: 29, losses: 0, kos: 8, submissions: 11 },
    { id: 4, name: "Conor McGregor", wins: 22, losses: 6, kos: 19, submissions: 1 },
];

// API endpoint to get fighter data
app.get("/api/fighters", (req, res) => {
    res.json(fighters);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
