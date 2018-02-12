-- DROP TABLE IF EXISTS links;


CREATE TABLE links(
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    description text NOT NULL,
    link VARCHAR(300) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    description text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
