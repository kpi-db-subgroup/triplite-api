PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE categories(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL
);
INSERT INTO categories VALUES(1,'Cafe');
INSERT INTO categories VALUES(2,'Rectaurants');
INSERT INTO categories VALUES(3,'Hotels');
CREATE TABLE organizations (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT UNIQUE NOT NULL,
address TEXT NOT NULL,
owner TEXT NOT NULL,
document TEXT NOT NULL);
INSERT INTO organizations VALUES(1,'KFC','Polzunova Street, 1, Kyiv, 02000','Pete Harman','/path/to/file');
INSERT INTO organizations VALUES(2,'Under Wonder','Velyka Vasylkivska Street, 21, Kyiv, 01004','Yuriy Kolesnyk','/path/to/file');
INSERT INTO organizations VALUES(3,'Copernicus Cinema Palace','Kopernyka Street, 9, Lviv, Lviv region, 79000','Nicolaus Copernicus','/path/to/file');
INSERT INTO organizations VALUES(4,'RIVERSIDE','Shevchenko Street, 103-a, Chernihiv, Chernihiv region, 14035','Ivan Ivanov','/path/to/file');
CREATE TABLE places (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
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
category_id INTEGER,
organization_id,
FOREIGN KEY(category_id) REFERENCES categories(id),
FOREIGN KEY(organization_id) REFERENCES organizations(id));
INSERT INTO places VALUES(1,'Lviv National Opera','/path/to/file','The Solomiya Krushelnytska Lviv State Academic Theatre of Opera and Ballet or Lviv Opera is an opera house located in Lviv, Ukraine largest western city and one of its historic cultural centers','+380322356586',NULL,'28 Svobody Avenue Lviv Ukraine','Entertainment Opera Ballet Concert',1,NULL,'09-09-2020',1,4,1);
INSERT INTO places VALUES(2,'U Restaurant About U','/path/to/file','Experience wonderful Ukrainian food – we serve you dishes that are freshly made and authentic. Take advantage of our outdoor seating and soak up the sun or have a drink in the cool evening breeze','+380733337327','11:00 AM - 11:00 PM','1A Hretska Odessa Ukraine','Food Drinks',1,NULL,'10-10-2020',1,2,2);
INSERT INTO places VALUES(3,'Kharkiv Palace Hotel','/path/to/file','See why so many travelers make Kharkiv Palace Premier Hotel their hotel of choice when visiting Kharkiv. Providing an ideal mix of value, comfort and convenience, it offers a charming setting with an array of amenities designed for travelers like you.','+380577664445',NULL,'2 Nezalezhnosti Avenue Kharkiv Ukraine','Accomodation Food Bar/Lounge Spa Gym',1,NULL,'11-11-2020',1,3,3);
INSERT INTO places VALUES(4,'Gulliver Shopping Mall','/path/to/file','','+380985555509','Sophisticated retail center with 150+ stores, plus restaurants, a movie theater & bowling alley','1A Sportyvna Square Kyiv (Kiev) Ukraine','Shopping Food Cinema Bowling',1,NULL,'12-12-2020',1,5,1);
CREATE TABLE users (
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
FOREIGN KEY(organization_id) REFERENCES organizations(id));
INSERT INTO users VALUES(1,'John Doe','john.doe@email.com','Designer from San Francisco','1992-02-16','San Francisco, US',NULL,'04c57ffebd7520c85b8ce63a5a3ed8a1df21a38e215dee8e875469bae2c9c388','USER',0,NULL);
INSERT INTO users VALUES(2,'Daniel Carroll','daniel.carroll@example.com',NULL,'1990-07-02','Toronto, Canada',NULL,'04c57ffebd7520c85b8ce63a5a3ed8a1df21a38e215dee8e875469bae2c9c388','ADMIN',0,NULL);
INSERT INTO users VALUES(3,'Fleurette Pauwel','fpauwel0@alexa.com','Agent of Example Organization','1977-04-26','Barcelona, Spain',NULL,'37d6a752ec0e452a43d753b93aa53cb116b4ad92e4e2a2d7085d0e29fd8b148d','AGENT',0,1);
INSERT INTO users VALUES(4,'Milissent Burburough','mburburough1@gov.uk',NULL,'1987-07-27','Cornwall, UK',NULL,'43a1f291b263c31eabded685cedc730e8311db964e5569e9c934c150578b0b5d','SUPPORT',0,NULL);
CREATE TABLE rating(id INTEGER PRIMARY KEY AUTOINCREMENT,
count INTEGER,
user_id INTEGER,
place_id INTEGER,
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(place_id) REFERENCES places(id));
INSERT INTO rating VALUES(1,5,1,2);
INSERT INTO rating VALUES(2,4,2,2);
INSERT INTO rating VALUES(3,1,3,2);
CREATE TABLE support_requests (
id INTEGER PRIMARY KEY AUTOINCREMENT ,
title TEXT,
description TEXT,
user_id INTEGER NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id));
INSERT INTO support_requests VALUES(1,'Complaint against user','User Daniel Carroll used obscene language against other',1);
INSERT INTO support_requests VALUES(2,'Dont have an access to email',NULL,3);
INSERT INTO support_requests VALUES(3,'Complaint against post','Post has inappropriate material',4);
CREATE TABLE favourites (
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
place_id INTEGER,
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(place_id) REFERENCES places(id));
INSERT INTO favourites VALUES(1,2,3);
INSERT INTO favourites VALUES(2,4,1);
INSERT INTO favourites VALUES(3,1,1);
INSERT INTO favourites VALUES(4,2,2);
CREATE TABLE comments(id INTEGER PRIMARY KEY AUTOINCREMENT,
message TEXT,
user_id INTEGER,
place_id INTEGER,
comment_id INTEGER,
is_deleted INTEGER DEFAULT 0,
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(place_id) REFERENCES places(id),
FOREIGN KEY(comment_id) REFERENCES comments(id));
INSERT INTO comments VALUES(1,'Nice place!',1,2,NULL,0);
INSERT INTO comments VALUES(2,'Yes, I agree',2,2,1,0);
INSERT INTO comments VALUES(3,'Sorry guys, but I dont like this place',3,2,1,0);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('categories',3);
INSERT INTO sqlite_sequence VALUES('organizations',4);
INSERT INTO sqlite_sequence VALUES('users',4);
INSERT INTO sqlite_sequence VALUES('rating',3);
INSERT INTO sqlite_sequence VALUES('support_requests',3);
INSERT INTO sqlite_sequence VALUES('favourites',4);
INSERT INTO sqlite_sequence VALUES('comments',3);
INSERT INTO sqlite_sequence VALUES('places',4);
COMMIT;
