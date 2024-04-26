CREATE TABLE formulaire(
    id CHAR(36) NOT NULL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname  VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL,
    tel VARCHAR(255) default '',
    choix VARCHAR(255) NOT NULL,
    content  VARCHAR(1000) NOT NULL
    -- ALTER TABLE formulaire ADD date DATE NOT NULL
);

CREATE TABLE users(
    id CHAR(36) NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname  VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    role VARCHAR(255) NOT NULL DEFAULT 'visitor'
);


CREATE TABLE category (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE articles (
    id CHAR(36) NOT NULL PRIMARY KEY,
    date DATETIME NOT NULL DEFAULT NOW(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category_id CHAR(36) NOT NULL,
--    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id), 
);

CREATE TABLE articles (
    id CHAR(36) NOT NULL PRIMARY KEY,
    date DATETIME NOT NULL DEFAULT NOW(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category_id CHAR(36) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id), 
);

ALTER TABLE articles ADD author VARCHAR(255) NOT NULL
