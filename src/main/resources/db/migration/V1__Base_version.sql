--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.5
-- Dumped by pg_dump version 9.5.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE customer (
    customer_id bigint NOT NULL,
    creation_date timestamp without time zone NOT NULL,
    first_name character varying(255) NOT NULL,
    last_modification_date timestamp without time zone NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE customer OWNER TO dieter_user;

--
-- Name: customer_roles; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE customer_roles (
    customer_id bigint NOT NULL,
    role_id bigint NOT NULL
);


ALTER TABLE customer_roles OWNER TO dieter_user;

--
-- Name: journal; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE journal (
    journal_id bigint NOT NULL,
    creation_date timestamp without time zone NOT NULL,
    last_modification_date timestamp without time zone NOT NULL,
    customer_id bigint NOT NULL,
    journal_title character varying(255)
);


ALTER TABLE journal OWNER TO dieter_user;

--
-- Name: journal_products; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE journal_products (
    journal_id bigint NOT NULL,
    product_id bigint NOT NULL
);


ALTER TABLE journal_products OWNER TO dieter_user;

--
-- Name: product; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE product (
    product_id bigint NOT NULL,
    calories integer NOT NULL,
    carbohydrates integer NOT NULL,
    creation_date timestamp without time zone NOT NULL,
    fats integer NOT NULL,
    last_modification_date timestamp without time zone NOT NULL,
    name character varying(255) NOT NULL,
    proteins integer NOT NULL
);


ALTER TABLE product OWNER TO dieter_user;

--
-- Name: role; Type: TABLE; Schema: public; Owner: dieter_user
--

CREATE TABLE role (
    role_id bigint NOT NULL,
    role_name character varying(255) NOT NULL
);


ALTER TABLE role OWNER TO dieter_user;

--
-- Name: seq_customer_id; Type: SEQUENCE; Schema: public; Owner: dieter_user
--

CREATE SEQUENCE seq_customer_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seq_customer_id OWNER TO dieter_user;

--
-- Name: seq_journal_id; Type: SEQUENCE; Schema: public; Owner: dieter_user
--

CREATE SEQUENCE seq_journal_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seq_journal_id OWNER TO dieter_user;

--
-- Name: seq_product_id; Type: SEQUENCE; Schema: public; Owner: dieter_user
--

CREATE SEQUENCE seq_product_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seq_product_id OWNER TO dieter_user;

--
-- Name: seq_role_id; Type: SEQUENCE; Schema: public; Owner: dieter_user
--

CREATE SEQUENCE seq_role_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seq_role_id OWNER TO dieter_user;

--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY customer (customer_id, creation_date, first_name, last_modification_date, last_name, password) FROM stdin;
\.


--
-- Data for Name: customer_roles; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY customer_roles (customer_id, role_id) FROM stdin;
\.


--
-- Data for Name: journal; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY journal (journal_id, creation_date, last_modification_date, customer_id, journal_title) FROM stdin;
\.


--
-- Data for Name: journal_products; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY journal_products (journal_id, product_id) FROM stdin;
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY product (product_id, calories, carbohydrates, creation_date, fats, last_modification_date, name, proteins) FROM stdin;
40	124	2131	2016-12-28 18:22:30.467	123	2016-12-28 18:22:30.467	Kurczak	123
41	142	1231	2016-12-28 18:23:14.82	123	2016-12-28 18:23:14.82	MięsoZKury	213
42	123	123	2016-12-29 13:35:56.604	123	2016-12-29 13:35:56.604	NewProduct123	123
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: dieter_user
--

COPY role (role_id, role_name) FROM stdin;
0	ROLE_ADMIN
1	ROLE_USER
\.


--
-- Name: seq_customer_id; Type: SEQUENCE SET; Schema: public; Owner: dieter_user
--

SELECT pg_catalog.setval('seq_customer_id', 46, true);


--
-- Name: seq_journal_id; Type: SEQUENCE SET; Schema: public; Owner: dieter_user
--

SELECT pg_catalog.setval('seq_journal_id', 18, true);


--
-- Name: seq_product_id; Type: SEQUENCE SET; Schema: public; Owner: dieter_user
--

SELECT pg_catalog.setval('seq_product_id', 42, true);


--
-- Name: seq_role_id; Type: SEQUENCE SET; Schema: public; Owner: dieter_user
--

SELECT pg_catalog.setval('seq_role_id', 1, false);


--
-- Name: customer_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);


--
-- Name: customer_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY customer_roles
    ADD CONSTRAINT customer_roles_pkey PRIMARY KEY (customer_id, role_id);


--
-- Name: journal_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY journal
    ADD CONSTRAINT journal_pkey PRIMARY KEY (journal_id);


--
-- Name: journal_products_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY journal_products
    ADD CONSTRAINT journal_products_pkey PRIMARY KEY (journal_id, product_id);


--
-- Name: product_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: role_pkey; Type: CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY role
    ADD CONSTRAINT role_pkey PRIMARY KEY (role_id);


--
-- Name: fk_5xvqom06vnfvbp30x52jbk9hg; Type: FK CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY journal
    ADD CONSTRAINT fk_5xvqom06vnfvbp30x52jbk9hg FOREIGN KEY (customer_id) REFERENCES customer(customer_id);


--
-- Name: fk_fwxje60n07rylmx6b2a6r8d7l; Type: FK CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY customer_roles
    ADD CONSTRAINT fk_fwxje60n07rylmx6b2a6r8d7l FOREIGN KEY (role_id) REFERENCES role(role_id);


--
-- Name: fk_g4euslkorl9agp8ledjpuo89a; Type: FK CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY journal_products
    ADD CONSTRAINT fk_g4euslkorl9agp8ledjpuo89a FOREIGN KEY (journal_id) REFERENCES journal(journal_id);


--
-- Name: fk_jad0h7tupg333nuibhka73gr1; Type: FK CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY customer_roles
    ADD CONSTRAINT fk_jad0h7tupg333nuibhka73gr1 FOREIGN KEY (customer_id) REFERENCES customer(customer_id);


--
-- Name: fk_r9wu7fjg3dcgjsrwvwcoapum3; Type: FK CONSTRAINT; Schema: public; Owner: dieter_user
--

ALTER TABLE ONLY journal_products
    ADD CONSTRAINT fk_r9wu7fjg3dcgjsrwvwcoapum3 FOREIGN KEY (product_id) REFERENCES product(product_id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

