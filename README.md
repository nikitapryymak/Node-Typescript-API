# Node-Typescript-API

A basic Node.js API built with Node 22, TypeScript, and Express framework.

## Features

- Built with **Node.js 22** and **TypeScript**
- Uses **Express** framework for routing
- Multiple dummy API endpoints with success responses
- JSON parsing middleware
- TypeScript compilation with proper configuration

## Prerequisites

- Node.js 22 (specified in `.nvmrc`)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Node-Typescript-API
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot-reload using nodemon and ts-node.

### Build
```bash
npm run build
```
Compiles TypeScript files to JavaScript in the `dist` directory.

### Production
```bash
npm start
```
Starts the compiled production server.

## API Endpoints

### GET /
- **Description**: Root endpoint with welcome message
- **Response**: 
```json
{
  "success": true,
  "message": "Welcome to the Node TypeScript API"
}
```

### GET /api/health
- **Description**: Health check endpoint
- **Response**: 
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2025-11-07T18:09:58.069Z"
}
```

### GET /api/users
- **Description**: Get list of users
- **Response**: 
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
  ]
}
```

### POST /api/users
- **Description**: Create a new user
- **Request Body**: 
```json
{
  "name": "Bob Wilson",
  "email": "bob@example.com"
}
```
- **Validation**: 
  - Both `name` and `email` fields are required
  - Email must be in valid format
- **Success Response** (201): 
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 3,
    "name": "Bob Wilson",
    "email": "bob@example.com"
  }
}
```
- **Error Responses** (400):
```json
{
  "success": false,
  "message": "Name and email are required fields"
}
```
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

### GET /api/products
- **Description**: Get list of products
- **Response**: 
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Product A", "price": 29.99 },
    { "id": 2, "name": "Product B", "price": 49.99 }
  ]
}
```

## Project Structure

```
Node-Typescript-API/
├── src/
│   └── index.ts          # Main application file with Express server
├── dist/                 # Compiled JavaScript files (generated)
├── node_modules/         # Dependencies (generated)
├── .nvmrc               # Node version specification
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## Configuration

### TypeScript Configuration
The `tsconfig.json` is configured with:
- Target: ES2022
- Strict mode enabled
- Output directory: `dist`
- Source directory: `src`

## Default Port

The server runs on port **3000** by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## License

ISC

