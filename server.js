const express = require('express');
// Importing express

const mysql = require('mysql2');
// Importing mysql

const inquirer = require("inquirer");
// Importing inquirer

// Port import
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creating a connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: '',
        database: 'tracker_db',
    },
    console.log(`Connected to the tracker_db database.`)
);

async function promptManager() {
  const answers = await inquirer.prompt ([
    {
      type: "list",
      name: "menu",
      messaage: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add employee",
        "Update an employees' role"
      ]
    }
  ]);

  
}