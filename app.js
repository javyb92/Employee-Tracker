var inquirer = require("inquirer");
var mysql = require("mysql");

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
              viewDepartments();
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

            case "Update Employee Role":
              employeeUpdateRole();
              break;

            case "exit":
              connection.end();
              break;
            }
          });
}

//VIEW DEPARTMENTS
function viewDepartments(){
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
// //VIEW ROLES
function viewRoles(){connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
});
}
// //VIEW EMPLOYEES
function viewEmployees(){connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
});
}
// //ADD DEPARTMENTS
function addDepartments(){inquirer.prompt([
  

        
// //ADD ROLES
// function addRoles()
//         inquirer.prompt("What do you want to call this role?")

// //ADD EMPLOYEES
function addEmployees(){inquirer.prompt([
  {
    name: "first_name",
    type: "input",
    message: "Please Enter employees first name"
  },
  {
    name: "last_name",
    type: "input",
    message: "Please Enter employees last name"
  },
  {
    name: "employees_role",
    type: "input",
    message: "Please Enter employees role",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }
])
.then(function(answer) {
  connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: answer.first_name,
      last_name: answer.last_name,
      role_id: answer.employees_role || 0,
    },
    function(err) {
      if (err) throw err;
      // start();
    }
  );
});
}

// //UPDATE EMPLOYEE ROLES
// employeeUpdateRole()