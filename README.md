# Invoice Generator Application

This full-stack application allows users to generate and manage invoices. It consists of a React client for the front end and a Node.js server for the backend.

## Features

- **User Authentication**: Users can sign up and log in securely to access the invoice generation features.

- **Invoice Generation**: Create detailed invoices with product information, calculate total costs, GST, and grand total.

- **PDF Export**: Generate and export invoices as PDF files for easy sharing and printing.

## Technologies Used

### Server-side (Node.js)

- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and invoice data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

### Client-side (React)

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing the application's state.
- **Axios**: HTTP client for making API requests.
- **HTML2Canvas and jsPDF**: Libraries for generating PDF files from HTML content.
- **React Router**: Declarative navigation for React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB Atlas account for database storage.
- Clone this repository.

### Installation

1. **Server Setup:**

   ```bash
   cd server
   npm install

Create a .env file in the server directory with the following content:

MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Start the server:
npm start


Client Setup:
cd client
npm install

Start the client:
npm run dev

