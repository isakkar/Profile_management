-- Database: SEprofiles
-- User: SEDBuser -> owner of the database
-- Password: pass123

-- Create the table
-- Table: public.profiles

-- DROP TABLE IF EXISTS public.profiles;

CREATE TABLE IF NOT EXISTS public.profiles
(
    id integer NOT NULL DEFAULT nextval('profiles_id_seq'::regclass),
    surname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    type character varying(255) COLLATE pg_catalog."default" NOT NULL,
    class character varying(255) COLLATE pg_catalog."default",
    teaching character varying(255)[] COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT profiles_pkey PRIMARY KEY (id),
    CONSTRAINT profiles_email_key UNIQUE (email),
    CONSTRAINT profiles_email_key1 UNIQUE (email),
    CONSTRAINT profiles_email_key10 UNIQUE (email),
    CONSTRAINT profiles_email_key11 UNIQUE (email),
    CONSTRAINT profiles_email_key12 UNIQUE (email),
    CONSTRAINT profiles_email_key13 UNIQUE (email),
    CONSTRAINT profiles_email_key14 UNIQUE (email),
    CONSTRAINT profiles_email_key15 UNIQUE (email),
    CONSTRAINT profiles_email_key16 UNIQUE (email),
    CONSTRAINT profiles_email_key17 UNIQUE (email),
    CONSTRAINT profiles_email_key18 UNIQUE (email),
    CONSTRAINT profiles_email_key19 UNIQUE (email),
    CONSTRAINT profiles_email_key2 UNIQUE (email),
    CONSTRAINT profiles_email_key20 UNIQUE (email),
    CONSTRAINT profiles_email_key3 UNIQUE (email),
    CONSTRAINT profiles_email_key4 UNIQUE (email),
    CONSTRAINT profiles_email_key5 UNIQUE (email),
    CONSTRAINT profiles_email_key6 UNIQUE (email),
    CONSTRAINT profiles_email_key7 UNIQUE (email),
    CONSTRAINT profiles_email_key8 UNIQUE (email),
    CONSTRAINT profiles_email_key9 UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.profiles
    OWNER to "SEDBuser";

-- Insert data into the table
INSERT INTO public.profiles(
    id, surname, name, email, type, class, teaching, "createdAt", "updatedAt")
VALUES
-- Students
(2, 'Sakkar', 'Icham', 'icham.sakkar@edu.devinci.fr', 'student', 'CDOF6', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(100, 'Smith', 'John', 'john.smith@devinci.fr', 'student', 'CDOF1', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(101, 'Doe', 'Jane', 'jane.doe@devinci.fr', 'student', 'CDOF2', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(102, 'Taylor', 'Alice', 'alice.taylor@devinci.fr', 'student', 'CDOF3', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(103, 'Brown', 'Chris', 'chris.brown@devinci.fr', 'student', 'CDOF4', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(104, 'Wilson', 'Emily', 'emily.wilson@devinci.fr', 'student', 'CDOF5', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(105, 'Evans', 'Robert', 'robert.evans@devinci.fr', 'student', 'CDOF6', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(106, 'King', 'Sophia', 'sophia.king@devinci.fr', 'student', 'CDOF1', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(107, 'White', 'Liam', 'liam.white@devinci.fr', 'student', 'CDOF2', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(108, 'Green', 'Olivia', 'olivia.green@devinci.fr', 'student', 'CDOF3', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(109, 'Hall', 'Noah', 'noah.hall@devinci.fr', 'student', 'CDOF4', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(110, 'Clark', 'Emma', 'emma.clark@devinci.fr', 'student', 'CDOF5', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(111, 'Hill', 'Mason', 'mason.hill@devinci.fr', 'student', 'CDOF6', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(112, 'Baker', 'Ava', 'ava.baker@devinci.fr', 'student', 'CDOF1', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(113, 'Morris', 'Ella', 'ella.morris@devinci.fr', 'student', 'CDOF2', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(114, 'Reed', 'Lucas', 'lucas.reed@devinci.fr', 'student', 'CDOF3', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(115, 'Cook', 'Mia', 'mia.cook@devinci.fr', 'student', 'CDOF4', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(116, 'Bell', 'Jack', 'jack.bell@devinci.fr', 'student', 'CDOF5', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(117, 'Carter', 'Zoe', 'zoe.carter@devinci.fr', 'student', 'CDOF6', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(118, 'Phillips', 'Ethan', 'ethan.phillips@devinci.fr', 'student', 'CDOF1', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(119, 'Mitchell', 'Lily', 'lily.mitchell@devinci.fr', 'student', 'CDOF2', NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),

-- Professors
(120, 'Adams', 'James', 'james.adams@devinci.fr', 'professor', NULL, 'CDOF1', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(121, 'Bailey', 'Charlotte', 'charlotte.bailey@devinci.fr', 'professor', NULL, 'CDOF2', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(122, 'Young', 'Benjamin', 'benjamin.young@devinci.fr', 'professor', NULL, 'CDOF3,CDOF4', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(123, 'Scott', 'Grace', 'grace.scott@devinci.fr', 'professor', NULL, 'CDOF5', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(124, 'Lewis', 'Henry', 'henry.lewis@devinci.fr', 'professor', NULL, 'CDOF6', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(125, 'Turner', 'Ella', 'ella.turner@devinci.fr', 'professor', NULL, 'CDOF1,CDOF2', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(126, 'Walker', 'Ethan', 'ethan.walker@devinci.fr', 'professor', NULL, 'CDOF3', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(127, 'Harris', 'Mia', 'mia.harris@devinci.fr', 'professor', NULL, 'CDOF4,CDOF5', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(128, 'Martin', 'Alexander', 'alexander.martin@devinci.fr', 'professor', NULL, 'CDOF6', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(129, 'Allen', 'Sophia', 'sophia.allen@devinci.fr', 'professor', NULL, 'CDOF1,CDOF2', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(130, 'Lopez', 'Daniel', 'daniel.lopez@devinci.fr', 'professor', NULL, 'CDOF3', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(131, 'Parker', 'Isabella', 'isabella.parker@devinci.fr', 'professor', NULL, 'CDOF4', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(132, 'Hughes', 'Matthew', 'matthew.hughes@devinci.fr', 'professor', NULL, 'CDOF5,CDOF6', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(133, 'Foster', 'Lily', 'lily.foster@devinci.fr', 'professor', NULL, 'CDOF1', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(134, 'Gonzalez', 'Lucas', 'lucas.gonzalez@devinci.fr', 'professor', NULL, 'CDOF2', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(135, 'Nelson', 'Ava', 'ava.nelson@devinci.fr', 'professor', NULL, 'CDOF3,CDOF4', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(136, 'Carter', 'Jack', 'jack.carter@devinci.fr', 'professor', NULL, 'CDOF5', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(137, 'Roberts', 'Zoe', 'zoe.roberts@devinci.fr', 'professor', NULL, 'CDOF6', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(138, 'Phillips', 'Ethan', 'ethan.phillips@devinci.fr', 'professor', NULL, 'CDOF1,CDOF2', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(139, 'Campbell', 'Chloe', 'chloe.campbell@devinci.fr', 'professor', NULL, 'CDOF3', '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),

-- Admins
(140, 'Brown', 'Emily', 'emily.brown@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(141, 'Smith', 'James', 'james.smith@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(142, 'Williams', 'Ava', 'ava.williams@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(143, 'Taylor', 'Oliver', 'oliver.taylor@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(144, 'Jones', 'Sophia', 'sophia.jones@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(145, 'Davis', 'Liam', 'liam.davis@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(146, 'Miller', 'Charlotte', 'charlotte.miller@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(147, 'Wilson', 'Ethan', 'ethan.wilson@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(148, 'Moore', 'Amelia', 'amelia.moore@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(149, 'Anderson', 'Mason', 'mason.anderson@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(150, 'Thomas', 'Isabella', 'isabella.thomas@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(151, 'Jackson', 'Lucas', 'lucas.jackson@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(152, 'White', 'Ella', 'ella.white@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(153, 'Harris', 'Benjamin', 'benjamin.harris@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(154, 'Martin', 'Zoe', 'zoe.martin@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(155, 'Thompson', 'Henry', 'henry.thompson@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(156, 'Garcia', 'Grace', 'grace.garcia@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(157, 'Martinez', 'Alexander', 'alexander.martinez@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(158, 'Robinson', 'Mia', 'mia.robinson@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01'),
(159, 'Clark', 'Sebastian', 'sebastian.clark@devinci.fr', 'admin', NULL, NULL, '2024-12-07 19:00:00.000+01', '2024-12-07 19:00:00.000+01');
