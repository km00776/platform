
-- CREATE DATABASE platform;


CREATE TABLE Clients
(
    client_id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Type VARCHAR(30),
    Email VARCHAR(50),
    SecondEmail VARCHAR(50),
    Address VARCHAR(255),
    Country VARCHAR(255)
    
    
);

