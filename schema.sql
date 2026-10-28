CREATE DATABASE IF NOT EXISTS gameshelf;

USE gameshelf;

CREATE TABLE IF NOT EXISTS user(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS game(
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    api_id INT NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    cover VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_game(
    user_id INT,
    game_id INT,
    playtime INT NOT NULL DEFAULT 0 CHECK(playtime >= 0),
    status ENUM('Backlog', 'Playing', 'Completed', 'Dropped') NOT NULL,
    rating TINYINT UNSIGNED NULL CHECK (rating BETWEEN 1 AND 5),
    comment VARCHAR(255),
    platform VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id, game_id),
    CONSTRAINT fk_user_game_user FOREIGN KEY(user_id) REFERENCES user(user_id),
    CONSTRAINT fk_user_game_game FOREIGN KEY(game_id) REFERENCES game(game_id)
);

CREATE TABLE IF NOT EXISTS wishlist(
    user_id INT,
    game_id INT,
    PRIMARY KEY(user_id, game_id),
    CONSTRAINT fk_wishlist_user FOREIGN KEY(user_id) REFERENCES user(user_id),
    CONSTRAINT fk_wishlist_game FOREIGN KEY(game_id) REFERENCES game(game_id)
);

