USE company_db;
INSERT INTO department(department_name)VALUES('sales'),('finance'),('development');
INSERT INTO role(title,salary,department_id)VALUES('Saleslead',50000,1),('Accountant',60000,2),('Web Developer',100000,3);
INSERT INTO employee(first_name,last_name,role_id,manager_id)VALUES('Bob','Yates',2,NULL),('George','White',1,NULL),('Sydney','Black',3,NULL);

