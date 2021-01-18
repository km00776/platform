
-- CREATE DATABASE platform;


CREATE TABLE Clients
(
    client_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(30),
    email VARCHAR(50),
    secondEmail VARCHAR(50),
    address VARCHAR(255),
    country VARCHAR(255),
    datecreated timestamp default current_timestamp
    
    
);

CREATE TABLE Users
(
    user_id BIGSERIAL,
    name VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255)  
);