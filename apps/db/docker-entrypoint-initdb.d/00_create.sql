DROP TABLE IF EXISTS customers;

CREATE TABLE customers
(
    `id`    INT NOT NULL AUTO_INCREMENT,
    `name`  VARCHAR(191),
    `email` VARCHAR(191),
    PRIMARY KEY (`id`)
);

INSERT INTO customers (id, name, email)
VALUES (1, "DefaultUser", "default@example.com");