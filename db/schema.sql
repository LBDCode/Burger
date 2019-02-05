CREATE database burgers_db;

USE burgers_db;

CREATE table burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);