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