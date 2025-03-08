// Mock data could be placed here instead of in the controller
const fighters = [
    {
        "id": 1,
        "name": "Jon Jones",
        "wins": 27,
        "losses": 1,
        "kos": 10,
        "submissions": 7
    },
    {
        "id": 2,
        "name": "Israel Adesanya",
        "wins": 24,
        "losses": 3,
        "kos": 16,
        "submissions": 0
    },
    {
        "id": 3,
        "name": "Kamaru Usman",
        "wins": 20,
        "losses": 2,
        "kos": 9,
        "submissions": 1
    },
    {
        "id": 4,
        "name": "Conor McGregor",
        "wins": 22,
        "losses": 6,
        "kos": 19,
        "submissions": 0
    },
    {
        "id": 5,
        "name": "Stipe Miocic",
        "wins": 20,
        "losses": 4,
        "kos": 15,
        "submissions": 0
    },
    {
        "id": 6,
        "name": "Nate Diaz",
        "wins": 20,
        "losses": 13,
        "kos": 5,
        "submissions": 13
    },
    {
        "id": 7,
        "name": "Francis Ngannou",
        "wins": 16,
        "losses": 3,
        "kos": 12,
        "submissions": 0
    },
    {
        "id": 8,
        "name": "Daniel Cormier",
        "wins": 22,
        "losses": 3,
        "kos": 10,
        "submissions": 5
    },
    {
        "id": 9,
        "name": "Amanda Nunes",
        "wins": 21,
        "losses": 4,
        "kos": 13,
        "submissions": 3
    },
    {
        "id": 10,
        "name": "Max Holloway",
        "wins": 23,
        "losses": 7,
        "kos": 10,
        "submissions": 3
    },
    {
        "id": 11,
        "name": "Tony Ferguson",
        "wins": 25,
        "losses": 7,
        "kos": 12,
        "submissions": 9
    },
    {
        "id": 12,
        "name": "Charles Oliveira",
        "wins": 31,
        "losses": 8,
        "kos": 9,
        "submissions": 20
    },
    {
        "id": 13,
        "name": "Robert Whittaker",
        "wins": 23,
        "losses": 6,
        "kos": 9,
        "submissions": 4
    },
    {
        "id": 14,
        "name": "Henry Cejudo",
        "wins": 16,
        "losses": 2,
        "kos": 10,
        "submissions": 4
    },
    {
        "id": 15,
        "name": "Jorge Masvidal",
        "wins": 35,
        "losses": 15,
        "kos": 16,
        "submissions": 2
    },
    {
        "id": 16,
        "name": "Makhachev Islam",
        "wins": 24,
        "losses": 1,
        "kos": 9,
        "submissions": 5
    },
    {
        "id": 17,
        "name": "Paulo Costa",
        "wins": 13,
        "losses": 2,
        "kos": 11,
        "submissions": 0
    },
    {
        "id": 18,
        "name": "Kevin Lee",
        "wins": 18,
        "losses": 7,
        "kos": 3,
        "submissions": 4
    },
    {
        "id": 19,
        "name": "Jéssica Andrade",
        "wins": 21,
        "losses": 9,
        "kos": 8,
        "submissions": 7
    },
    {
        "id": 20,
        "name": "Valentina Shevchenko",
        "wins": 22,
        "losses": 3,
        "kos": 9,
        "submissions": 7
    }
]


const getAll = () => {
    return fighters;
};

const getById = (id) => {
    return fighters.find(fighter => fighter.id === parseInt(id));
};

module.exports = {
    getAll,
    getById
};
