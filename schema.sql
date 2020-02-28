DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);


CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUES ("Car Mechanical Support"),
       ("Car Mechanical Services");

INSERT INTO role (department_id, title, salary)
VALUES (1,"Receptionist", 30000),
       (2,"Mechanic", 50000),
       (2,"Auto Body Repair Technician", 50000),
       (2,"SR Auto Mechanical Techician", 60000),
       (2,"Shop Floor Manager", 70000),
       (1,"Shop Manager", 70000),
       (1,"Shop Owner", 80000);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Corrales", 1, 6),
       ("Paige", "Riley", 1, 6),
       ("Bryan", "Sevilla", 2, 5),
       ("Steve", "Wolfe", 2, 5),
       ("Clifton", "Britt", 3, 5),
       ("Fredrick", "Lamont", 3, 5),
       ("Manuel", "Jeannin", 4, 5),
       ("Dennis", "Reynolds", 5, 7),
       ("Thea", "Samper", 6, 7),
       ("Frank", "Reynolds", 7, );



