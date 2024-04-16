import mysql.connector
from dotenv import load_dotenv
import os
from src.model import User
from src.model.User import UpdateUser
from src.utils import get_hashed_password
import psycopg2
from psycopg2 import sql
from psycopg2.extras import DictCursor

load_dotenv()

MYSQL_HOST = os.getenv("MYSQL_HOST")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DB = os.getenv("MYSQL_DB")


def connect():
    return mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )


def initialize_db_rendez_vous():
    conn = connect()
    cursor = conn.cursor()
    query = """
       CREATE TABLE IF NOT EXISTS rendez_vous (
           id INT AUTO_INCREMENT PRIMARY KEY,
           personne_id INT,
           personne_pro_id INT,
           date DATE,
           heure_debut TIME,
           heure_fin TIME,
           etat  varchar(50) DEFAULT 'en attente',
           message VARCHAR(500),
           FOREIGN KEY (personne_id) REFERENCES personne(id),
           FOREIGN KEY (personne_pro_id) REFERENCES personne(id)
       );
    """
    cursor.execute(query, multi=True)
    conn.close()


def initialize_db_profession():
    conn = connect()
    cursor = conn.cursor()
    query = """
       CREATE TABLE IF NOT EXISTS profession (
           id INT AUTO_INCREMENT PRIMARY KEY,
           nom VARCHAR(255)
       );
    """
    cursor.execute(query, multi=True)
    conn.close()


def initialize_db_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS domaine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255)
        );
    """
    cursor.execute(query)
    conn.close()


def initialize_db_sous_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS sous_domaine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            domaine_id INT,
            FOREIGN KEY (domaine_id) REFERENCES domaine(id)
        );
    """
    cursor.execute(query)
    conn.close()


def initialize_db_competence():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS competence (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        personne_id INT,
        FOREIGN KEY (personne_id) REFERENCES personne(id)
    );
    """
    cursor.execute(query)
    conn.close()


def initialize_db_entreprise():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS entreprise(
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        ville VARCHAR(255),
        code_postal VARCHAR(255)
    );
    """
    cursor.execute(query)
    conn.close()


def initialize_db_personne():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS personne (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        prenom VARCHAR(255),
        email VARCHAR(255),
        mdp VARCHAR(255),
        telephone VARCHAR(255),
        description_profil VARCHAR(255),
        profession_id INT,
        role VARCHAR(255) DEFAULT 'user',
        sous_domaine INT,
        entreprise INT,
        FOREIGN KEY (profession_id) REFERENCES profession(id),
        FOREIGN KEY (sous_domaine) REFERENCES sous_domaine(id),
        FOREIGN KEY (entreprise) REFERENCES entreprise(id)
    );
    """
    cursor.execute(query)
    conn.close()


def initialize_value_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Informatique') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Informatique'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Finance') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Finance'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Ingénierie') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Ingénierie'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Marketing') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Marketing'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Medecine & Santé') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Medecine & Santé'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Education & Enseignement') AS tmp
    WHERE NOT EXISTS (
     SELECT nom FROM domaine WHERE nom = 'Education & Enseignement'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Art & Design') AS tmp
    WHERE NOT EXISTS (
    SELECT nom FROM domaine WHERE nom = 'Art & Design'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Droit') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Droit'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Science social') AS tmp
    WHERE NOT EXISTS (
    SELECT nom FROM domaine WHERE nom = 'Science social'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Environnement') AS tmp
    WHERE NOT EXISTS (
          SELECT nom FROM domaine WHERE nom = 'Environnement'
             ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Medias') AS tmp
    WHERE NOT EXISTS (
     SELECT nom FROM domaine WHERE nom = 'Medias'
     ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Industrie') AS tmp
    WHERE NOT EXISTS (
              SELECT nom FROM domaine WHERE nom = 'Industrie'
      ) LIMIT 1;

    """
    generator = cursor.execute(query, multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()


def initialize_value_sous_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Développement Web', 1) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Développement Web' AND domaine_id = 1
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Sécurité des réseaux', 1) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Sécurité des réseaux' AND domaine_id = 1
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'IA', 1) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'IA' AND domaine_id = 1
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Analyse financière', 2) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Analyse financière' AND domaine_id = 2
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Assurance', 2) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Assurance' AND domaine_id = 2
      ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Comptabilité & Audit', 2) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Comptabilité & Audit' AND domaine_id = 2
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Genie civil', 3) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Genie civil' AND domaine_id = 3
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Génie Mecanique', 3) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Génie Mecanique' AND domaine_id = 3
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Marketing digital', 4) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Marketing digital' AND domaine_id = 4
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Gestion de marque', 4) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Gestion de marque' AND domaine_id = 4
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Infirmier', 5) AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM sous_domaine WHERE nom = 'Infirmier' AND domaine_id = 5
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Chirurgie', 5) AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM sous_domaine WHERE nom = 'Chirurgie' AND domaine_id = 5
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Enseignement Supérieur', 6) AS tmp
    WHERE NOT EXISTS (
      SELECT nom FROM sous_domaine WHERE nom = 'Enseignement Supérieur' AND domaine_id = 6
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
      SELECT * FROM (SELECT 'Design graphique', 7) AS tmp
      WHERE NOT EXISTS (
          SELECT nom FROM sous_domaine WHERE nom = 'Design graphique' AND domaine_id = 7
      ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Droit des affaires', 8) AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM sous_domaine WHERE nom = 'Droit des affaires' AND domaine_id = 8
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Sociologie', 9) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Sociologie' AND domaine_id = 9
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
     SELECT * FROM (SELECT 'Energie renouvellable', 10) AS tmp
     WHERE NOT EXISTS (
         SELECT nom FROM sous_domaine WHERE nom = 'Energie renouvellable' AND domaine_id = 10
     ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Stratégie de communication', 11) AS tmp
      WHERE NOT EXISTS (
         SELECT nom FROM sous_domaine WHERE nom = 'Stratégie de communication' AND domaine_id = 11
       ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Electronique', 12) AS tmp
     WHERE NOT EXISTS (
         SELECT nom FROM sous_domaine WHERE nom = 'Electronique' AND domaine_id = 12
      ) LIMIT 1;
    """
    generator = cursor.execute(query, multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()


def initialize_value_competence():
    conn = connect()
    cursor = conn.cursor()
    query = """
       INSERT INTO competence (nom, personne_id)
       SELECT * FROM (SELECT 'HTML', 1) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'HTML' AND personne_id = 1
       ) LIMIT 1;

       INSERT INTO competence (nom, personne_id)
       SELECT * FROM (SELECT 'PHP', 1) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'PHP' AND personne_id = 1
       ) LIMIT 1;

       INSERT INTO competence (nom, personne_id)
       SELECT * FROM (SELECT 'Analyse financière avancée', 2) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Analyse financière avancée' AND personne_id = 2
       ) LIMIT 1;

       INSERT INTO competence (nom, personne_id)
       SELECT * FROM (SELECT 'Conception de pièces mécaniques', 3) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Conception de pièces mécaniques' AND personne_id = 3
       ) LIMIT 1;

       INSERT INTO competence (nom, personne_id)
       SELECT * FROM (SELECT 'Stratégie de contenu', 4) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Stratégie de contenu' AND personne_id = 4
       ) LIMIT 1;

    """
    generator = cursor.execute(query, multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()


def initialize_value_entreprise():
    conn = connect()
    cursor = conn.cursor()
    query = """
       INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Orange', 'Bordeaux', '33000') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Orange'
       ) LIMIT 1;

        INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Capgemini', 'Merignac', '33281') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Capgemini'
       ) LIMIT 1;

       INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Safran', 'Le Haillan', '33200') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Safran'
       ) LIMIT 1;

       INSERT INTO entreprise (nom, ville, code_postal)
          SELECT * FROM (SELECT 'CGI', 'Le Haillan', '33185') AS tmp
          WHERE NOT EXISTS (
              SELECT nom FROM entreprise WHERE nom = 'CGI'
       ) LIMIT 1;

      INSERT INTO entreprise (nom, ville, code_postal)
      SELECT * FROM (SELECT 'Onepoint', 'Pessac', '33600') AS tmp
      WHERE NOT EXISTS (
          SELECT nom FROM entreprise WHERE nom = 'Onepoint'
      ) LIMIT 1;

      INSERT INTO entreprise (nom, ville, code_postal)
      SELECT * FROM (SELECT 'ATOS', 'Pessac', '33600') AS tmp
      WHERE NOT EXISTS (
          SELECT nom FROM entreprise WHERE nom = 'ATOS'
      ) LIMIT 1;
    """
    generator = cursor.execute(query, multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()


def initialize_value_profession():
    conn = connect()
    cursor = conn.cursor()
    query = """
        INSERT INTO profession (nom)
           SELECT * FROM (SELECT 'Salarié') AS tmp
           WHERE NOT EXISTS (
               SELECT nom FROM profession WHERE nom = 'Salarié'
           ) LIMIT 1;

       INSERT INTO profession (nom)
       SELECT * FROM (SELECT 'Stagiaire') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM profession WHERE nom = 'Stagiaire'
       ) LIMIT 1;

       INSERT INTO profession (nom)
       SELECT * FROM (SELECT 'Alternant') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM profession WHERE nom = 'Alternant'
       ) LIMIT 1;

       INSERT INTO profession (nom)
       SELECT * FROM (SELECT 'Freelance') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM profession WHERE nom = 'Freelance'
       ) LIMIT 1;

        INSERT INTO profession (nom)
        SELECT * FROM (SELECT 'Entrepreneur') AS tmp
        WHERE NOT EXISTS (
            SELECT nom FROM profession WHERE nom = 'Entrepreneur'
        ) LIMIT 1;

        INSERT INTO profession (nom)
        SELECT * FROM (SELECT 'Chef d''entreprise') AS tmp
        WHERE NOT EXISTS (
            SELECT nom FROM profession WHERE nom = 'Chef d''entreprise'
        ) LIMIT 1;

        INSERT INTO profession (nom)
        SELECT * FROM (SELECT 'Consultant') AS tmp
        WHERE NOT EXISTS (
            SELECT nom FROM profession WHERE nom = 'Consultant'
        ) LIMIT 1;

        INSERT INTO profession (nom)
        SELECT * FROM (SELECT 'Fonctionnaire') AS tmp
        WHERE NOT EXISTS (
            SELECT nom FROM profession WHERE nom = 'Fonctionnaire'
        ) LIMIT 1;
    """
    generator = cursor.execute(query, multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()


def initialize_value_personne():
    conn = connect()
    cursor = conn.cursor()

    valeurs_a_inserer = [
        ("Dupont", "Jean", "jean.dupont@example.com", "nico", "0678236461", "sqdqsds", 1, 1, 1),
        ("Durand", "Marie", "marie.durand@example.com", "nico", "0678236463", "sqdqsds", 2, 2, 1),
        ("Lefebvre", "Pierre", "pierre.lefebvre@example.com", "nico", "0678236465", "sqdqsds", 3, 1, 1),
        ("Martin", "Sophie", "sophie.martin@example.com", "nico", "0678236467", "sqdqsds", 4, 4, 2),
        ("Dubois", "Luc", "luc.dubois@example.com", "nico", "0678236469", "sqdqsds", 5, 5, 2),
        ("Bertrand", "Claire", "claire.bertrand@example.com", "nico", "0678236471", "sqdqsds", 6, 6, 2),
        ("Roux", "Thomas", "thomas.roux@example.com", "nico", "0678236473", "sqdqsds", 7, 7, 3),
        ("Moreau", "Charlotte", "charlotte.moreau1@example.com", "nico", "0678236475", "sqdqsds", 1, 8, 3),
        ("Dupont", "Jean", "jean.dupont1@example.com", "nico", "0678236471", "sqdqsds", 8, 9, 4),
        ("BARRY", "Marie", "marie.durand1@example.com", "nico", "0678236473", "sqdqsds", 8, 10, 4),
        ("Lefebvre", "Pierre", "pierre.lefebvre@example.com", "nico", "0678236475", "sqdqsds", 5, 11, 5),
        ("Martin", "Sophie", "sophie.martin1@example.com", "nico", "0678236477", "sqdqsds", 3, 12, 5),
        ("Dubois", "Luc", "luc.dubois1@example.com", "nico", "0678236479", "sqdqsds", 4, 13, 6),
        ("Bertrand", "Claire", "claire.bertrand1@example.com", "nico", "0678236481", "sqdqsds", 1, 14, 7),
        ("Roux", "Thomas", "thomas.roux@example.com", "nico", "0678236483", "sqdqsds", 8, 15, 8),
        ("Moreau", "Charlotte", "charlotte.moreau2@example.com", "nico", "0678236485", "sqdqsds", 1, 16, 9),
        ("BA", "Claire", "jean.dupont2@example.com", "nico", "0678236481", "sqdqsds", 2, 17, 10),
        ("Durand", "Marie", "marie.durand2@example.com", "nico", "0678236483", "sqdqsds", 5, 18, 11),
        ("Lefebvre", "Pierre", "pierre.lefebvre3@example.com", "nico", "0678236485", "sqdqsds", 6, 19, 12),
        ("Martin", "Sophie", "sophie.martin@example.com", "nico", "0678236487", "sqdqsds", 7, 1, 1),
        ("Dubois", "Luc", "luc.dubois@example.com", "nico", "0678236489", "sqdqsds", 3, 2, 1),
        ("Bertrand", "Claire", "claire.bertrand@example.com", "nico", "0678236491", "sqdqsds", 8, 3, 1),
        ("Roux", "Thomas", "thomas.roux3@example.com", "nico", "0678236493", "sqdqsds", 4, 4, 2),
        ("Moreau", "Charlotte", "charlotte.moreau@example.com", "nico", "0678236495", "sqdqsds", 2, 5, 2)
    ]

    requete_insertion = """
        INSERT INTO personne (id, nom, prenom, email, mdp, telephone, description_profil, profession_id, sous_domaine, entreprise)
        SELECT NULL, %s, %s, %s, %s, %s, %s, %s, %s, %s
        FROM DUAL
        WHERE NOT EXISTS (
            SELECT 1 FROM personne WHERE nom = %s AND prenom = %s AND email = %s
        )
    """
    for valeurs in valeurs_a_inserer:
        cursor.execute(requete_insertion, (*valeurs, *valeurs[:3]))

    conn.close()


def initialize_db():
    initialize_db_domaine()
    initialize_db_sous_domaine()
    initialize_db_competence()
    initialize_db_profession()
    initialize_db_entreprise()
    initialize_db_personne()
    initialize_db_rendez_vous()
    initialize_value_domaine()
    initialize_value_sous_domaine()
    initialize_value_competence()
    initialize_value_entreprise()
    initialize_value_profession()
    initialize_value_personne()


# pour retourner les domaines sur la  barre de recherche_dans_la_base
def retourner_domaines():
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    query = """
    SELECT
    	id,
        nom
    FROM
       domaine"""
    cursor.execute(query)
    results = cursor.fetchall()
    conn.close()
    return results


def recherche_dans_la_base(q: str):
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    query = """
    SELECT
    	personne.id,
        personne.nom AS nom,
        personne.prenom AS prenom,
        profession.nom AS profession,
        personne.description_profil AS description,
        sous_domaine.nom AS sous_domaine,
        domaine.nom AS domaine,
        GROUP_CONCAT(competence.nom) AS competences,
        entreprise.nom AS entreprise
    FROM
        personne
    LEFT JOIN
        profession ON personne.profession_id = profession.id
    LEFT JOIN
        sous_domaine ON personne.sous_domaine = sous_domaine.id
    LEFT JOIN
        domaine ON sous_domaine.domaine_id = domaine.id
    LEFT JOIN
        competence ON personne.id = competence.personne_id
    LEFT JOIN
        entreprise ON personne.entreprise = entreprise.id
    WHERE
        personne.nom LIKE %s OR
        personne.prenom LIKE %s OR
        profession.nom LIKE %s OR
        sous_domaine.nom LIKE %s OR
        domaine.nom LIKE %s OR
        competence.nom LIKE %s OR
        entreprise.nom LIKE %s
    GROUP BY personne.id
    """
    search_string = '%' + q + '%'
    cursor.execute(query, (
        search_string, search_string, search_string, search_string, search_string, search_string, search_string))
    results = cursor.fetchall()
    conn.close()
    return results


def findUserById(userId: int):
    try:
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(f"""SELECT
            personne.id,
            personne.nom,
            personne.prenom,
            personne.email,
            personne.telephone,
            personne.description_profil as description,
            profession.nom as profession,
            sous_domaine.nom as sous_domaine,
            domaine.nom as domaine,
            entreprise.nom as entreprise,
            GROUP_CONCAT(competence.nom) AS competences
        FROM personne
        LEFT JOIN profession ON personne.profession_id = profession.id
        LEFT JOIN sous_domaine ON personne.sous_domaine = sous_domaine.id
        LEFT JOIN domaine ON sous_domaine.domaine_id = domaine.id
        LEFT JOIN competence ON personne.id = competence.personne_id
        LEFT JOIN entreprise ON personne.entreprise = entreprise.id
        WHERE personne.id = {userId}
        GROUP BY personne.id""")
        results = cursor.fetchone()
        conn.close()
        return results
    except Exception as e:
        print(f"Error in findUserById: {e}")
        return None


def findUserByEmail(email: str):
    try:
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        # Use parameterized query to prevent SQL injection
        cursor.execute("""SELECT
            personne.id,
            personne.email,
            personne.role,
            personne.mdp
        FROM personne
        WHERE personne.email = %s""", (email,))
        results = cursor.fetchone()
        conn.close()
        return results
    except Exception as e:
        print(f"Error in findUserByEmail: {e}")
        return None


def createUser(user: User):
    try:
        conn = connect()
        cursor = conn.cursor()
        password = get_hashed_password(user.mdp)
        cursor.execute(f"""INSERT INTO personne (nom, prenom, email, mdp, telephone)
        VALUES (%s, %s, %s, %s, %s)""",
                       (user.nom, user.prenom, user.email, password, user.telephone))
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        print(f"Error in createUser: {e}")
        return False


def updateUserById(userId: int, user: UpdateUser):
    try:
        conn = connect()
        cursor = conn.cursor(buffered=True)

        entreprise_id = findEntrepriseByUserId(user)
        profession_id = findProfessionByUserId(user)
        sous_domaine_id = findSousDomaineByUserId(user)
        updateCompetences(user)

        update_query = """
            UPDATE personne
            SET nom = %s, prenom = %s,email = %s, telephone = %s, description_profil = %s,
                profession_id = %s, sous_domaine = %s, entreprise = %s
            WHERE id = %s
        """
        cursor.execute(update_query, (
            user.nom, user.prenom, user.email, user.telephone,
            user.description, profession_id, sous_domaine_id, entreprise_id, userId
        ))

        conn.commit()  # Commit the transaction

        # Close cursor and connection
        cursor.close()
        conn.close()
        return user
    except Exception as e:
        print(f"Error in updateUserById: {e}")
        return None


def findEntrepriseByUserId(user: UpdateUser):
    conn = connect()
    cursor = conn.cursor(buffered=True)

    cursor.execute("""SELECT id FROM entreprise WHERE nom = %s""", (user.entreprise,))
    row = cursor.fetchone()
    if row is None:
        cursor.execute(f"""INSERT INTO entreprise (nom, ville, code_postal)
                                  VALUES (%s, %s, %s)""",
                       (user.entreprise, "Bordeaux", "33000"))
        conn.commit()  # Commit the insert operation

        cursor.execute(f"""SELECT id FROM entreprise WHERE nom = %s""", (user.entreprise,))
        row = cursor.fetchone()
        return row[0] if row else None
    else:
        entreprise_id = row[0] if row else None
        return entreprise_id


def findDomaineByUserId(user: UpdateUser):
    conn = connect()
    cursor = conn.cursor(buffered=True)

    cursor.execute("""SELECT id FROM domaine WHERE nom = %s""", (user.domaine,))
    row = cursor.fetchone()

    domaine_id = row[0] if row else None
    return domaine_id


def findProfessionByUserId(user: UpdateUser):
    conn = connect()
    cursor = conn.cursor(buffered=True)

    cursor.execute("""SELECT id FROM profession WHERE nom = %s""", (user.profession,))
    row = cursor.fetchone()

    profession_id = row[0] if row else None
    return profession_id


def findSousDomaineByUserId(user: UpdateUser):
    conn = connect()
    cursor = conn.cursor(buffered=True)

    cursor.execute("""SELECT id FROM sous_domaine WHERE nom = %s""", (user.sous_domaine,))
    row = cursor.fetchone()

    sous_domaine_id = row[0] if row else None
    return sous_domaine_id


def updateCompetences(user: UpdateUser):
    conn = connect()
    cursor = conn.cursor(buffered=True)

    cursor.execute("""SELECT id FROM personne WHERE email = %s""", (user.email,))
    row = cursor.fetchone()
    if row is None:
        return None
    else:
        user_id = row[0] if row else None

    cursor.execute("""DELETE FROM competence WHERE personne_id = %s""", (user_id,))
    conn.commit()

    print(user.competences)

    try:
        for competence in user.competences:
            print(competence, user_id)
            cursor.execute(f"""INSERT INTO competence (nom, personne_id)
            VALUES (%s, %s)""", (competence, user_id))
            conn.commit()
    except Exception as e:
        print(f"Error in updateCompetences: {e}")
        return None

    cursor.close()
    conn.close()


def findAllDomaines():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("SELECT  nom FROM domaine")
    domaines = cursor.fetchall()
    return domaines


def findAllSousDomaines():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("SELECT nom FROM sous_domaine")
    sous_domaines = cursor.fetchall()
    return sous_domaines


def findAllCompetences():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("SELECT nom FROM competence")
    competences = cursor.fetchall()
    return competences


def findAllProfessions():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("SELECT nom FROM profession")
    professions = cursor.fetchall()
    return professions


def findAllEntreprises():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("SELECT nom FROM entreprise")
    entreprises = cursor.fetchall()
    return entreprises


def delUserById(userId: int):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM personne WHERE id = %s", (userId,))
    conn.commit()
    conn.close()
    return True


def findRdvById(userId: int):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT personne_id AS personne,personne_pro_id as pro_id,date,heure_debut,heure_fin,message FROM rendez_vous LEFT JOIN personne ON personne.id = personne_id where personne_id = %s",
        (userId,))
    rdv = cursor.fetchall()
    formatedRdv = []
    for r in rdv:
        formatedRdv.append(
            {"personne": r[1], "personne_pro_id": r[2], 'date': r[3], 'heure_debut': r[4],
             'heure_fin': r[5], 'message': r[6]})

    return formatedRdv
