# UFC Dashboard Backend
A robust RESTful API backend for the UFC Dashboard application that provides comprehensive MMA fighter data management using Node.js, Express, and PostgreSQL.

## 📋 Table of Contents
- [Features](#-features)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Running the Application](#-running-the-application)
- [Environment Configuration](#-environment-configuration)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)

## ✨ Features
- Fighter profile management (create, read, update, delete)
- Environment-specific configurations for development and production
- Secure PostgreSQL connection with SSL support
- Cross-platform compatibility
- Automatic database initialization

## 🛠️ Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database management system
- **pg** - PostgreSQL client for Node.js
- **dotenv** - Environment variable management
- **cross-env** - Cross-platform environment variable configuration

## 📥 Installation
Clone the repository:
```bash
git clone https://github.com/Shpendsermaxhaj/mma-dashboard-backend.git
cd mma-dashboard-backend
```

Install dependencies:
```bash
npm install
```

Set up environment variables:
Create `.env` file for development:
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ufc_dashboard
DB_USER=postgres
DB_PASSWORD=your_password
```

## 🗄️ Database Setup
Create a local PostgreSQL database for development:
```sql
CREATE DATABASE ufc_dashboard;
```

Initialize the database. The application automatically creates the necessary tables on startup through the initialization code in `src/utils/dbInit.js`.

Add demo data (optional):
```bash
node src/utils/insertDemoData.js
```

## 🚀 Running the Application
```bash
# Development mode
npm run dev

# Production mode
npm run prod

# Default mode
npm start
```

## ⚙️ Environment Configuration
The application uses environment-specific configuration files:
- `.env` - Development settings
- `.env.production` - Production settings

Production configuration example:
```
NODE_ENV=production
DB_HOST=dpg-cv65p2ogph6c73dka9ug-a.frankfurt-postgres.render.com
DB_PORT=5432
DB_NAME=ufc_dashboard
DB_USER=ufc_dashboard_user
DB_PASSWORD=your_production_password
```

## 🔌 API Endpoints
### Fighters
| Method | Endpoint               | Description               |
|---------|------------------------|----------------------------|
| GET      | `/api/fighters`         | Get all fighters           |
| GET      | `/api/fighters/:id`     | Get fighter by ID          |
| POST     | `/api/fighters`         | Create a new fighter       |
| PUT      | `/api/fighters/:id`     | Update a fighter           |
| DELETE   | `/api/fighters/:id`     | Delete a fighter           |

## 📁 Project Structure
```
mma-dashboard-backend/
├── .env                  # Development environment variables
├── .env.production       # Production environment variables
├── .gitignore            # Git ignore file
├── README.md             # Project documentation
├── server.js             # Application entry point
├── package.json          # Project dependencies and scripts
└── src/
    ├── config/           # Configuration files
    │   └── config.js     # Environment configuration setup
    ├── controllers/      # Request handlers
    │   └── fighterController.js  # Fighter CRUD operations
    ├── models/           # Database models
    │   └── fighterModel.js       # Fighter data model
    ├── routes/           # API routes
    │   └── fighterRoutes.js      # Fighter endpoints
    ├── services/         # Business logic
    │   └── fighterService.js     # Fighter service layer
    └── utils/            # Utility functions
        ├── dbInit.js     # Database initialization
        └── insertDemoData.js     # Demo data script
```

## 📄 License
Made with ❤️ by Shpend Sermaxhaj
