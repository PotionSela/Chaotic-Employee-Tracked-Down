const mysql = require('mysql2');
// Importing mysql

const inquirer = require("inquirer");
// Importing inquirer

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
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add employee",
        "Update an employees' role",
        "Update employee managers",
        "View employees by manager",
        "View employees by department",
        "Delete department",
        "Delete role",
        "Delete employee"
      ]
    }
  ]);

  if (answers.menu === "View all departments") {
    // select answer for departments
    db.query(`SELECT * FROM department`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }

  if (answers.menu === "View all roles") {
    // Select answer for roles
    db.query(`SELECT * FROM role`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }

  if (answers.menu === "View all employees") {
    // Select answer for employees
    db.query(`SELECT * FROM employee`, (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }

  if (answers.menu === "Add department") {
    // questions for adding a new department
    const departmentAnswers = await inquirer.prompt ([
      {
        type: "input",
        name: "newID",
        message: "What is the ID of the new department?"
      },
      {
        type: "input",
        name: "newDepartment",
        message: "What is the name of the new department?"
      }
    ])
    db.query(`INSERT INTO department (id, department_name) VALUES (?, ?)`, [departmentAnswers.newID, departmentAnswers.newDepartment], (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }
  if (answers.menu === "Add role") {
    // questions for adding a new role
    const roleAnswers = await inquirer.prompt ([
      {
        type: "input",
        name: "newRole",
        message: "What is the new role?"
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the salary?"
      },
      {
        type: "input",
        name: "newDepartmentID",
        message: "What is the department ID?"
      }
    ])
    db.query (`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,[roleAnswers.newRole, roleAnswers.newSalary, roleAnswers.newDepartmentID], (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }

  if (answers.menu === "Add employee") {
    // questions for adding new employee
    const employeeAnswers = await inquirer.prompt ([
      {
        type: "input",
        name: "firstName",
        message: "What is the new employees' first name?"
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the new employees' last name?"
      },
      {
        type: "input",
        name: "newRoleID",
        message: "What is the new employees' role ID?"
      },
      {
        type: "input",
        name: "ManagerID",
        message: "What is the new employees' manager ID?"
      }
    ])
    db.query (`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,[employeeAnswers.firstName, employeeAnswers.lastName, employeeAnswers.newRoleID, employeeAnswers.ManagerID], (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    });
  }

  if (answers.menu === "Update an employees' role") {
    // questions for updating an employee
    const answers = await inquirer.prompt ([
      {
        type: "input",
        name: "updateEmployee",
        message: "What is the emplyees' ID?"
      },
      {
        type: "input",
        name: "updateRole",
        message: "What is the role ID?"
      }
    ])
    db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [answers.updateRole, answers.updateEmployee], (err, result) => {
      if (err) throw err
      console.table (result)
      promptManager();
    })
  }
}

// Calling 
db.connect (err => {
  if (err) throw err
  promptManager();
})