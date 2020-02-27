-- Drops the employee_db if it already exists --
DROP DATABASE IF EXISTS company_db;

-- Create the database and specified it for use.
CREATE DATABASE company_db;

USE company_db;

-- Create the table plans.
CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  PRIMARY KEY (id)
);


CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Car Mechanical Services");

INSERT INTO role (name)
VALUES ("Receptionist", 30000);
       ("Mechanic", 50000);
       ("Auto Body Repair Technician", 50000);
       ("Auto Mechanical Techician", 70000);
       ("Shop Lead", 80000);
    

INSERT INTO employee (name)
VALUES ("Alina", "Li", "Receptionist")
       ("Emily", "Willis", "Receptionist");
       ("Johnny", "Walker", "Mechanic");
       ("James", "Thompson", "Mechanic");
       ("Roy", "Smith", "Auto Body Repair Technician");
       ("Samuel", "Smith", "Auto Body Repair Technician");
       ("Travis", "Brandt", "Auto Mechanical Technician");
       ("William", "Willis", "Shop Lead");



