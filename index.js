const db = require("./config/connection");
const inquirer = require("inquirer");

const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Select task from menu.",
      choices: ["View Departments", "View Roles", "View Employees"],
    })
    .then(({ task }) => {
      switch (task) {
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "View Employees":
          viewEmployees();
          break;

        default:
          break;
      }
    });
};
const viewDepartments = () => {
    db.promise().query('SELECT * FROM department').then (([rows]) => {
        console.table(rows);
        mainMenu()
    })
}
const viewRoles = () => {
    db.promise().query('SELECT * FROM role').then (([rows]) => {
        console.table(rows);
        mainMenu()
    })
}
const viewEmployees = () => {
    db.promise().query('SELECT * FROM employee').then (([rows]) => {
        console.table(rows);
        mainMenu()
    })
}
mainMenu();
