PGDMP                       |            postgres    16.2    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4802                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    5            �            1259    16414 	   locations    TABLE     ]   CREATE TABLE public.locations (
    id integer NOT NULL,
    id_province integer NOT NULL
);
    DROP TABLE public.locations;
       public         heap    postgres    false    5            �            1259    16413    locations_id_province_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_id_province_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.locations_id_province_seq;
       public          postgres    false    220    5            �           0    0    locations_id_province_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.locations_id_province_seq OWNED BY public.locations.id_province;
          public          postgres    false    219            �            1259    16412    locations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.locations_id_seq;
       public          postgres    false    220    5            �           0    0    locations_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.locations_id_seq OWNED BY public.locations.id;
          public          postgres    false    218            �            1259    16399 	   provinces    TABLE     �   CREATE TABLE public.provinces (
    id integer NOT NULL,
    name character varying(20),
    full_name character varying(60),
    latitude integer
);
    DROP TABLE public.provinces;
       public         heap    postgres    false    5            �            1259    16398    provinces_id_seq    SEQUENCE     �   CREATE SEQUENCE public.provinces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.provinces_id_seq;
       public          postgres    false    217    5            �           0    0    provinces_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.provinces_id_seq OWNED BY public.provinces.id;
          public          postgres    false    216            "           2604    16417    locations id    DEFAULT     l   ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);
 ;   ALTER TABLE public.locations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    218    220            #           2604    16418    locations id_province    DEFAULT     ~   ALTER TABLE ONLY public.locations ALTER COLUMN id_province SET DEFAULT nextval('public.locations_id_province_seq'::regclass);
 D   ALTER TABLE public.locations ALTER COLUMN id_province DROP DEFAULT;
       public          postgres    false    219    220    220            !           2604    16402    provinces id    DEFAULT     l   ALTER TABLE ONLY public.provinces ALTER COLUMN id SET DEFAULT nextval('public.provinces_id_seq'::regclass);
 ;   ALTER TABLE public.provinces ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �          0    16414 	   locations 
   TABLE DATA                 public          postgres    false    220   �       �          0    16399 	   provinces 
   TABLE DATA                 public          postgres    false    217   �       �           0    0    locations_id_province_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.locations_id_province_seq', 1, false);
          public          postgres    false    219            �           0    0    locations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.locations_id_seq', 1, false);
          public          postgres    false    218            �           0    0    provinces_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.provinces_id_seq', 1, false);
          public          postgres    false    216            '           2606    16420    locations locations_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
       public            postgres    false    220            %           2606    16404    provinces provinces_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT provinces_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.provinces DROP CONSTRAINT provinces_pkey;
       public            postgres    false    217            (           2606    16421    locations provinces    FK CONSTRAINT     z   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT provinces FOREIGN KEY (id_province) REFERENCES public.provinces(id);
 =   ALTER TABLE ONLY public.locations DROP CONSTRAINT provinces;
       public          postgres    false    4645    217    220            �   
   x���          �   
   x���         