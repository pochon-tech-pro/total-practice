DROP TABLE IF EXISTS customers;

CREATE TABLE customers
(
    `id`         INT       NOT NULL AUTO_INCREMENT,
    `name`       VARCHAR(191),
    `tel`        VARCHAR(191),
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

INSERT INTO customers (id, name, tel)
VALUES (1, "DefaultUser", "03-1111-2222");