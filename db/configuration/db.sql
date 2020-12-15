CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS organizations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  owner TEXT NOT NULL,
  document TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS places (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  photo TEXT,
  description TEXT,
  phone TEXT NOT NULL,
  working_time TEXT,
  address TEXT NOT NULL,
  services TEXT,
  places_count INTEGER,
  booking_service TEXT,
  creation_date TEXT NOT NULL DEFAULT CURRENT_DATE,
  is_verified INTEGER NOT NULL DEFAULT 0,
  category_id INTEGER NOT NULL,
  organization_id INTEGER NOT NULL,
  FOREIGN KEY(category_id) REFERENCES categories(id),
  FOREIGN KEY(organization_id) REFERENCES organizations(id)
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  bio TEXT,
  date_of_birth TEXT,
  address TEXT,
  photo TEXT,
  password TEXT NOT NULL,
  type TEXT NOT NULL,
  is_banned INTEGER NOT NULL DEFAULT 0,
  organization_id INTEGER UNIQUE,
  FOREIGN KEY(organization_id) REFERENCES organizations(id)
);

CREATE TABLE IF NOT EXISTS rating (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  count INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  place_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(place_id) REFERENCES places(id)
);

CREATE TABLE IF NOT EXISTS support_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS favourites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  place_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(place_id) REFERENCES places(id)
);

CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  place_id INTEGER,
  comment_id INTEGER,
  is_deleted INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(place_id) REFERENCES places(id),
  FOREIGN KEY(comment_id) REFERENCES comments(id)
);
