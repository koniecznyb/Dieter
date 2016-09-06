CREATE TABLE customer
(
    customer_id BIGINT PRIMARY KEY NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_modification_date TIMESTAMP NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    password VARCHAR(255)
);
CREATE TABLE customer_roles
(
    customer_id BIGINT NOT NULL,
    role_id BIGINT NOT NULL,
    CONSTRAINT customer_roles_pkey PRIMARY KEY (customer_id, role_id)
);
CREATE TABLE journal
(
    journal_id BIGINT PRIMARY KEY NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    last_modification_date TIMESTAMP NOT NULL,
    customer_id BIGINT NOT NULL
);
CREATE TABLE journal_products
(
    journal_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    CONSTRAINT journal_products_pkey PRIMARY KEY (journal_id, product_id)
);
CREATE TABLE product
(
    product_id BIGINT PRIMARY KEY NOT NULL,
    calories INTEGER NOT NULL,
    carbohydrates INTEGER NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    fats INTEGER NOT NULL,
    last_modification_date TIMESTAMP NOT NULL,
    name VARCHAR(255) NOT NULL,
    proteins INTEGER NOT NULL
);
CREATE TABLE role
(
    role_id BIGINT PRIMARY KEY NOT NULL,
    role_name VARCHAR(255) NOT NULL
);
ALTER TABLE customer_roles ADD FOREIGN KEY (customer_id) REFERENCES customer (customer_id);
ALTER TABLE customer_roles ADD FOREIGN KEY (role_id) REFERENCES role (role_id);
ALTER TABLE journal ADD FOREIGN KEY (customer_id) REFERENCES customer (customer_id);
ALTER TABLE journal_products ADD FOREIGN KEY (journal_id) REFERENCES journal (journal_id);
ALTER TABLE journal_products ADD FOREIGN KEY (product_id) REFERENCES product (product_id);

