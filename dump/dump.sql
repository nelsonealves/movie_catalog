CREATE TABLE IF NOT EXISTS `db`.`movie` (
  `id` VARCHAR(100) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `description` LONGTEXT NULL,
  `image` VARCHAR(250) NULL,
  `movie_banner` VARCHAR(250) NULL,
  `director` VARCHAR(250) NULL,
  `producer` VARCHAR(250) NULL,
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3