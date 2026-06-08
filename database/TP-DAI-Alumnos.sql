
CREATE TABLE public.beneficios (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    id_comercio integer,
    descripcion_corta character varying(150),
    descuento smallint,
    activo bit(1) NOT NULL
);


ALTER TABLE public.beneficios OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16402)
-- Name: beneficios_usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beneficios_usuarios (
    id integer NOT NULL,
    id_beneficio integer NOT NULL,
    id_usuario integer NOT NULL,
    fecha timestamp without time zone NOT NULL
);


ALTER TABLE public.beneficios_usuarios OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16405)
-- Name: comercios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comercios (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    descripcion character varying,
    telefono_principal character varying(75) NOT NULL,
    comercio_datoscontacto character varying(150),
    url character varying(512),
    email character varying(320) NOT NULL,
    activo bit(1)
);


ALTER TABLE public.comercios OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16410)
-- Name: provincias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provincias (
    id integer NOT NULL,
    nombre character varying(150) NOT NULL,
    orden integer,
    activo bit(1)
);


ALTER TABLE public.provincias OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16413)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(75) NOT NULL,
    apellido character varying(75) NOT NULL,
    fecha_nacimiento timestamp without time zone NOT NULL,
    id_provincia integer NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 4810 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: beneficios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.beneficios VALUES (1, 'Descuento Tech 10%', 1, 'TecnologÃ­a', 10, B'1');
INSERT INTO public.beneficios VALUES (2, 'Promo Ropa 20%', 2, 'Indumentaria', 20, B'1');
INSERT INTO public.beneficios VALUES (3, 'Oferta Super 5%', 3, 'Alimentos', 5, B'1');
INSERT INTO public.beneficios VALUES (4, 'Electro 15%', 4, 'ElectrodomÃ©sticos', 15, B'1');
INSERT INTO public.beneficios VALUES (5, 'Gym 30%', 5, 'Fitness', 30, B'1');
INSERT INTO public.beneficios VALUES (6, 'Libros 10%', 6, 'Lectura', 10, B'1');
INSERT INTO public.beneficios VALUES (7, 'Mascotas 12%', 7, 'Petshop', 12, B'1');
INSERT INTO public.beneficios VALUES (8, 'Auto 8%', 8, 'Repuestos', 8, B'1');
INSERT INTO public.beneficios VALUES (9, 'Viajes 25%', 9, 'Turismo', 25, B'1');
INSERT INTO public.beneficios VALUES (10, 'Farmacia 5%', 10, 'Salud', 5, B'1');
INSERT INTO public.beneficios VALUES (11, 'Gaming 18%', 11, 'Videojuegos', 18, B'1');
INSERT INTO public.beneficios VALUES (12, 'Hogar 10%', 12, 'DecoraciÃ³n', 10, B'1');
INSERT INTO public.beneficios VALUES (13, 'Belleza 15%', 13, 'CosmÃ©tica', 15, B'1');
INSERT INTO public.beneficios VALUES (14, 'Bicis 20%', 14, 'Deportes', 20, B'1');
INSERT INTO public.beneficios VALUES (15, 'MÃºsica 10%', 15, 'Instrumentos', 10, B'1');

CREATE SEQUENCE IF NOT EXISTS provincias_id_seq;
ALTER TABLE provincias ALTER COLUMN id SET DEFAULT nextval('provincias_id_seq');
SELECT setval('provincias_id_seq', (SELECT MAX(id) FROM provincias));
--
-- TOC entry 4811 (class 0 OID 16402)
-- Dependencies: 216
-- Data for Name: beneficios_usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.beneficios_usuarios VALUES (1, 1, 1, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (2, 2, 2, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (3, 3, 3, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (4, 4, 4, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (5, 5, 5, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (6, 6, 6, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (7, 7, 7, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (8, 8, 8, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (9, 9, 9, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (10, 10, 10, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (11, 11, 11, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (12, 12, 12, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (13, 13, 13, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (14, 14, 14, '2026-05-04 08:23:09.821588');
INSERT INTO public.beneficios_usuarios VALUES (15, 15, 15, '2026-05-04 08:23:09.821588');


--
-- TOC entry 4812 (class 0 OID 16405)
-- Dependencies: 217
-- Data for Name: comercios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.comercios VALUES (1, 'TechStore', 'TecnologÃ­a', '111111111', 'Soporte', 'www.techstore.com', 'contacto1@mail.com', B'1');
INSERT INTO public.comercios VALUES (2, 'ModaPlus', 'Indumentaria', '222222222', 'Ventas', 'www.modaplus.com', 'contacto2@mail.com', B'1');
INSERT INTO public.comercios VALUES (3, 'SuperMarket', 'Alimentos', '333333333', 'AtenciÃ³n', 'www.super.com', 'contacto3@mail.com', B'1');
INSERT INTO public.comercios VALUES (4, 'ElectroMax', 'ElectrodomÃ©sticos', '444444444', 'Soporte', 'www.electromax.com', 'contacto4@mail.com', B'1');
INSERT INTO public.comercios VALUES (5, 'FitnessGym', 'Gimnasio', '555555555', 'RecepciÃ³n', 'www.fit.com', 'contacto5@mail.com', B'1');
INSERT INTO public.comercios VALUES (6, 'BookWorld', 'Libros', '666666666', 'Ventas', 'www.books.com', 'contacto6@mail.com', B'1');
INSERT INTO public.comercios VALUES (7, 'PetShop', 'Mascotas', '777777777', 'AtenciÃ³n', 'www.pet.com', 'contacto7@mail.com', B'1');
INSERT INTO public.comercios VALUES (8, 'AutoParts', 'Repuestos', '888888888', 'Ventas', 'www.auto.com', 'contacto8@mail.com', B'1');
INSERT INTO public.comercios VALUES (9, 'TravelNow', 'Turismo', '999999999', 'AtenciÃ³n', 'www.travel.com', 'contacto9@mail.com', B'1');
INSERT INTO public.comercios VALUES (10, 'PharmaLife', 'Farmacia', '101010101', 'Soporte', 'www.pharma.com', 'contacto10@mail.com', B'1');
INSERT INTO public.comercios VALUES (11, 'GameZone', 'Videojuegos', '111111112', 'Ventas', 'www.games.com', 'contacto11@mail.com', B'1');
INSERT INTO public.comercios VALUES (12, 'HomeStyle', 'Hogar', '121212121', 'AtenciÃ³n', 'www.home.com', 'contacto12@mail.com', B'1');
INSERT INTO public.comercios VALUES (13, 'BeautyShop', 'Belleza', '131313131', 'Ventas', 'www.beauty.com', 'contacto13@mail.com', B'1');
INSERT INTO public.comercios VALUES (14, 'BikeStore', 'Bicicletas', '141414141', 'Soporte', 'www.bike.com', 'contacto14@mail.com', B'1');
INSERT INTO public.comercios VALUES (15, 'MusicStore', 'Instrumentos', '151515151', 'Ventas', 'www.music.com', 'contacto15@mail.com', B'1');


--
-- TOC entry 4813 (class 0 OID 16410)
-- Dependencies: 218
-- Data for Name: provincias; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provincias VALUES (1, 'Buenos Aires', 1, B'1');
INSERT INTO public.provincias VALUES (2, 'CÃ³rdoba', 2, B'1');
INSERT INTO public.provincias VALUES (3, 'Santa Fe', 3, B'1');
INSERT INTO public.provincias VALUES (4, 'Mendoza', 4, B'1');
INSERT INTO public.provincias VALUES (5, 'TucumÃ¡n', 5, B'1');
INSERT INTO public.provincias VALUES (6, 'Salta', 6, B'1');
INSERT INTO public.provincias VALUES (7, 'Chaco', 7, B'1');
INSERT INTO public.provincias VALUES (8, 'Corrientes', 8, B'1');
INSERT INTO public.provincias VALUES (9, 'Entre RÃ­os', 9, B'1');
INSERT INTO public.provincias VALUES (10, 'Misiones', 10, B'1');
INSERT INTO public.provincias VALUES (11, 'NeuquÃ©n', 11, B'1');
INSERT INTO public.provincias VALUES (12, 'RÃ­o Negro', 12, B'1');
INSERT INTO public.provincias VALUES (13, 'San Juan', 13, B'1');
INSERT INTO public.provincias VALUES (14, 'La Pampa', 14, B'1');
INSERT INTO public.provincias VALUES (15, 'Formosa', 15, B'1');


--
-- TOC entry 4814 (class 0 OID 16413)
-- Dependencies: 219
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuarios VALUES (1, 'Juan', 'PÃ©rez', '1990-01-01 00:00:00', 1);
INSERT INTO public.usuarios VALUES (2, 'Ana', 'GÃ³mez', '1992-02-02 00:00:00', 2);
INSERT INTO public.usuarios VALUES (3, 'Luis', 'MartÃ­nez', '1988-03-03 00:00:00', 3);
INSERT INTO public.usuarios VALUES (4, 'Carla', 'LÃ³pez', '1995-04-04 00:00:00', 4);
INSERT INTO public.usuarios VALUES (5, 'Pedro', 'DÃ­az', '1991-05-05 00:00:00', 5);
INSERT INTO public.usuarios VALUES (6, 'LucÃ­a', 'FernÃ¡ndez', '1993-06-06 00:00:00', 6);
INSERT INTO public.usuarios VALUES (7, 'Diego', 'Ruiz', '1987-07-07 00:00:00', 7);
INSERT INTO public.usuarios VALUES (8, 'SofÃ­a', 'Torres', '1996-08-08 00:00:00', 8);
INSERT INTO public.usuarios VALUES (9, 'Miguel', 'Sosa', '1989-09-09 00:00:00', 9);
INSERT INTO public.usuarios VALUES (10, 'Laura', 'Castro', '1994-10-10 00:00:00', 10);
INSERT INTO public.usuarios VALUES (11, 'MartÃ­n', 'Ortiz', '1990-11-11 00:00:00', 11);
INSERT INTO public.usuarios VALUES (12, 'Paula', 'Silva', '1992-12-12 00:00:00', 12);
INSERT INTO public.usuarios VALUES (13, 'AndrÃ©s', 'Molina', '1986-01-13 00:00:00', 13);
INSERT INTO public.usuarios VALUES (14, 'Valeria', 'Ramos', '1997-02-14 00:00:00', 14);
INSERT INTO public.usuarios VALUES (15, 'Jorge', 'Acosta', '1993-03-15 00:00:00', 15);


--
-- TOC entry 4650 (class 2606 OID 16417)
-- Name: beneficios beneficios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beneficios
    ADD CONSTRAINT beneficios_pkey PRIMARY KEY (id);


--
-- TOC entry 4652 (class 2606 OID 16419)
-- Name: beneficios_usuarios beneficios_usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beneficios_usuarios
    ADD CONSTRAINT beneficios_usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 4654 (class 2606 OID 16421)
-- Name: comercios comercios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comercios
    ADD CONSTRAINT comercios_pkey PRIMARY KEY (id);


--
-- TOC entry 4656 (class 2606 OID 16423)
-- Name: comercios comercios_unique_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comercios
    ADD CONSTRAINT comercios_unique_email UNIQUE (email);


--
-- TOC entry 4658 (class 2606 OID 16425)
-- Name: comercios comercios_unique_tel; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comercios
    ADD CONSTRAINT comercios_unique_tel UNIQUE (telefono_principal);


--
-- TOC entry 4660 (class 2606 OID 16427)
-- Name: provincias provincias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincias
    ADD CONSTRAINT provincias_pkey PRIMARY KEY (id);


--
-- TOC entry 4662 (class 2606 OID 16429)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 4663 (class 2606 OID 16430)
-- Name: beneficios beneficios_comercios_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beneficios
    ADD CONSTRAINT beneficios_comercios_fk FOREIGN KEY (id_comercio) REFERENCES public.comercios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4664 (class 2606 OID 16435)
-- Name: beneficios_usuarios beneficios_usuarios_beneficios_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beneficios_usuarios
    ADD CONSTRAINT beneficios_usuarios_beneficios_fk FOREIGN KEY (id_beneficio) REFERENCES public.beneficios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4665 (class 2606 OID 16440)
-- Name: beneficios_usuarios beneficios_usuarios_usuarios_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beneficios_usuarios
    ADD CONSTRAINT beneficios_usuarios_usuarios_fk FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4666 (class 2606 OID 16445)
-- Name: usuarios usuarios_provincias_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_provincias_fk FOREIGN KEY (id_provincia) REFERENCES public.provincias(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2026-05-13 11:56:46

--
-- PostgreSQL database dump complete
--

