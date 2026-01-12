# Dev Excuse API

A fun and lighthearted REST API that generates developer excuses for various situations. Perfect for humor, educational projects, or as a placeholder API for testing purposes.

## 🚀 Features

- **Random Excuses**: Get random developer excuses
- **Filter by Level**: Get excuses specific to developer experience levels (junior, mid, senior, classic)
- **Filter by Category**: Get excuses by situation category (debugging, deployment)
- **RESTful Design**: Clean and simple API endpoints
- **CORS Enabled**: Ready for cross-origin requests
- **Express 5**: Built with the latest Express.js

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dev-excuse-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Start the production server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Endpoints

#### Get Random Excuse
Returns a completely random excuse from all available excuses.

**Endpoint:** `GET /api/v1/excuse/random`

**Response:**
```json
{
  "success": true,
  "data": {
    "excuse": "It works on my machine"
  }
}
```

#### Get Excuse by Level
Returns a random excuse filtered by developer experience level.

**Endpoint:** `GET /api/v1/excuse/random?level=<level>`

**Query Parameters:**
- `level` (string): One of `junior`, `mid`, `senior`, or `classic`

**Example Request:**
```
GET /api/v1/excuse/random?level=junior
```

**Response:**
```json
{
  "success": true,
  "data": {
    "excuse": "It worked in the tutorial",
    "level": "junior"
  }
}
```

**Available Levels:**
- `junior` - Excuses typical of junior developers
- `mid` - Excuses from mid-level developers
- `senior` - Senior developer excuses
- `classic` - Classic developer excuses

#### Get Excuse by Category
Returns a random excuse filtered by situation category.

**Endpoint:** `GET /api/v1/excuse/random?category=<category>`

**Query Parameters:**
- `category` (string): One of `debugging` or `deployment`

**Example Request:**
```
GET /api/v1/excuse/random?category=debugging
```

**Response:**
```json
{
  "success": true,
  "data": {
    "excuse": "The bug only happens in production",
    "category": "debugging"
  }
}
```

**Available Categories:**
- `debugging` - Excuses for debugging situations
- `deployment` - Deployment-related excuses

### Error Responses

#### Invalid Level
```json
{
  "success": false,
  "error": "Invalid level. Allowed values: junior, mid, senior, classic"
}
```

#### Invalid Category
```json
{
  "success": false,
  "error": "Invalid category. Allowed values: debugging, deployment"
}
```

## 🗂️ Project Structure

```
dev-excuse-api/
├── src/
│   ├── app.js                  # Express app configuration
│   ├── controllers/
│   │   └── excuse.controller.js # Business logic for excuses
│   ├── data/
│   │   └── excuses.js          # Excuse data store
│   └── routes/
│       └── excuse.routes.js    # API route definitions
├── index.js                    # Entry point
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🛠️ Technologies Used

- **Express.js 5** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development auto-reload
- **ES6 Modules** - Modern JavaScript syntax

## 📝 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm test` - Run tests (not implemented yet)

## 🎯 Use Cases

- Learning REST API development
- Testing API clients and tools
- Placeholder API for frontend development
- Adding humor to developer communities
- API integration tutorials

## 🤝 Contributing

Feel free to fork this project and add your own excuses! To add new excuses:

1. Edit `src/data/excuses.js`
2. Add excuses to existing levels/categories or create new ones
3. Update the controller logic if adding new categories
4. Update this README with new options

## 📄 License

ISC

## 🎉 Sample Excuses

**Junior Level:**
- "It worked in the tutorial"
- "I thought the deadline was tomorrow"

**Mid Level:**
- "It works on my machine"
- "The issue is with the environment"

**Senior Level:**
- "That's a feature, not a bug"
- "We optimized for delivery speed"

**Debugging:**
- "The bug only happens in production"
- "I can't reproduce it locally"

**Deployment:**
- "CI/CD is acting weird"
- "The server needs a restart"

---

Made with ☕ and 😅 by developers, for developers
