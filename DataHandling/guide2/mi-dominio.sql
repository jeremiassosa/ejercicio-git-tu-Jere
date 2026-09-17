DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS genres;

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25)
    );

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    synopsis VARCHAR(200),
    trailer_url VARCHAR(30), 
    realease_year INTEGER, 
    genre_id INTEGER,
    CONSTRAINT fk_moviesGenres FOREIGN KEY (genre_id) REFERENCES genres(id)
    );

INSERT INTO genres (id, name) VALUES 
(2, 'Acción'),
(6, 'Animacion');    

INSERT INTO movies (id, title, synopsis, trailer_url, realease_year, genre_id) 
    VALUES 
    ('1', 'transformers', 'una pelicula de autos alienigenes', 'www.youtube.com', 2007, 2),
    ('2', 'Como Entrenar a tu dragon 1', 'hipo, un joven vikingo delgado y poco hábil que vive en la Isla Mema y desafía las tradiciones de su pueblo', 'www.youtube.com', 2009, 6),
    ('3', 'Como Entrenar a tu dragon 2', 'Hipo y Chimuelo descubren una cueva secreta de hielo con cientos de dragones salvajes', 'www.youtube.com', 2014, 6),
    ('4', 'Como Entrenar a tu dragon 3', 'la búsqueda de un hogar seguro para los dragones y la madurez de Hipo al aceptar que él y Chimuelo', 'www.youtube.com', 2019, 6),
    ('5', 'Como Entrenar a tu dragon IRL', 'Hipo, un joven vikingo delgado y poco hábil que vive en la Isla Mema y desafía las tradiciones de su pueblo', 'www.youtube.com', 2024, 6);