
-- CREATE DATABASE platform;


CREATE TABLE Clients
(
    client_id SERIAL PRIMARY KEY,
    Name VARCHAR(255) UNIQUE NOT NULL,
    Type VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    SecondEmail VARCHAR(50),
    Address VARCHAR(255) NOT NULL,
    Country VARCHAR(255) NOT NULL,
    DateCreated timestamp default current_timestamp,
    isArchived BOOLEAN NOT NULL
);

