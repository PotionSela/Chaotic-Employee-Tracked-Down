const express = require('express');
// Importing express

const mysql = require('mysql2');
// Importing mysql

// Port import
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connecting to database
const db = mysql.createConnection (
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);