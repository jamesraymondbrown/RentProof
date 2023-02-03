DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS prices CASCADE;
DROP TABLE IF EXISTS submissions CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  square_feet VARCHAR(255) NOT NULL,
  number_of_bedrooms INTEGER NOT NULL,
  number_of_bathrooms INTEGER NOT NULL,
  city VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL
);

CREATE TABLE prices (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id),
  date DATE NOT NULL,
  price NUMERIC,
  documentation VARCHAR(255) NOT NULL
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  square_footage INTEGER NOT NULL,
  number_of_bedrooms INTEGER NOT NULL,
  number_of_bathrooms INTEGER NOT NULL,
  city VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  price NUMERIC,
  documentation VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)


