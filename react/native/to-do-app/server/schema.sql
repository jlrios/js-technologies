CREATE DATABASE mytodo;

USE mytodo;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255)
);

CREATE TABLE todos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE shared_todos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    todo_id INT,
    user_id INT,
    FOREIGN KEY (todo_id) REFERENCES todos(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
)

INSERT INTO users (name, email, password) VALUES ('Ringo', 'ringo@somenet.net', 'abc1234');
INSERT INTO users (name, email, password) VALUES ('Paul', 'paul@somenet.net', 'abc4321');

