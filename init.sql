CREATE DATABASE IF NOT EXISTS shadow_db;
GRANT ALL PRIVILEGES ON shadow_db.* TO 'jackexperts'@'%';
FLUSH PRIVILEGES;
