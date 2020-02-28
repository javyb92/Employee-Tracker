var inquirer = require("inquirer");
var mysql = require("mysql2/promise");
const cTable = require('console.table');

try {
    cli();

} catch (error) {
    connection.end();
}



async function cli(){

    const connection = await mysql.createConnection({
        host:'localhost',
        user: 'root',
        database: 'company_db'    
    });

    const { userChoice } = await inquirer.prompt([
        {
          type: "What would you like to do?",
          name: "list",
          message: "choice",

        },
      ]).then(function(data) {
    


      });



}





  

//CREATE TABLE

//CREATE DB IN SQL

//ADD DEPARTMENTS

//ADD ROLES

//ADD EMPLOYEES

//VIEW DEPARTMENTS

//VIEW ROLES

//VIEW EMPLOYEES

//UPDATE EMPLOYEE ROLES

