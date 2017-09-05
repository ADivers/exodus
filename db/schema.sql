DROP DATABASE IF EXISTS exodus_db;

CREATE DATABASE exodus_db;

USE exodus_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
user_id INT AUTO_INCREMENT,
first_name VARCHAR(50),
last_name VARCHAR(50),
email_address VARCHAR(255),
phone_number VARCHAR(10),
contact_mode BIT DEFAULT 1,
PRIMARY KEY(user_id)
);

INSERT INTO users VALUES (1,'Carl','Dor','carljdor@gmail.com','7814753599',1),
						(2,'Micheal','Farrelly','m11farrelly@gmail.com','2027137070',1),
						(3,'Alex','Divers','divers1776@gmail.com','9149809150',1),
                        (4,'Akwandu','Nwosu','ajnwosu@gmail.com','2022702224',1);
                        
SELECT *
FROM users;