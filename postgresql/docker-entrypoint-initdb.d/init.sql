CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL    
);

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    id_color NUMERIC NOT NULL,
    id_icon NUMERIC NOT NULL    
);

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    color_name VARCHAR(50)
);

CREATE TABLE icons (
    id SERIAL PRIMARY KEY,
    icon_name VARCHAR(50)
);

INSERT INTO icons(icon_name) VALUES('laught');
INSERT INTO colors(colors_name) VALUES('blue');

INSERT INTO lists(title, id_color, id_icon) VALUES('Courses', 1, 1);