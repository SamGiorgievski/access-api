CREATE DATABASE basicapi_users;
USE basicapi_users;

CREATE TABLE IF NOT EXISTS users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    first_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    image_url text COLLATE pg_catalog."default",
    is_verified boolean,
    description text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

INSERT INTO users (first_name, last_name, email, image_url, is_verified, description)
VALUES
('Sam', 'Giorgievski', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me'),
('Sam2', 'Giorgievski2', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me 2'),
('Sam3', 'Giorgievski3', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me3'),
('Sam4', 'Giorgievski4', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me4'),
('Sam5', 'Giorgievski5', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me5'),
('Sam6', 'Giorgievski6', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me6'),
('Sam7', 'Giorgievski7', 'samgiorgievski@gmail.com', 'https://myvenicelife.com/cdn/shop/articles/Italian_Greyhound_Sakura.jpg?v=1586080016', false, 'about me7'),;