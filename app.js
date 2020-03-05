var inquirer = require("inquirer");
var mysql = require("mysql2/promise");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "company_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    companySearch();
  });


function companySearch(){

    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Departments",
                "View Roles",
                "View Employees",
                "Add Departments",
                "Add Roles",
                "Add Employees",
                "exit" 
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
            case "View Departments":
              viewDepartment();
              break;
      
            case "View Roles":
              viewRoles();
              break;
      
            case "View Employees":
              viewEmployees();
              break;
      
            case "Add Departments":
              addDepartments();
              break;

            case "Add Roles":
              addRoles();
              break;
              
            case "Add Employees":
              addEmployees();
              break;
            
            case "exit":
              connection.end();
              break;
            }
          });



}



//ADD DEPARTMENTS

//ADD ROLES

//ADD EMPLOYEES

//VIEW DEPARTMENTS

//VIEW ROLES

//VIEW EMPLOYEES

//UPDATE EMPLOYEE ROLES

