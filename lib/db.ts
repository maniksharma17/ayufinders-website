import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let pool: mysql.Pool | null = null;

export const getConnection = async () => {
  if (pool) return pool;

  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0,
  });
  return pool;
};

export const query = async (sql: string, params?: any[]) => {
  const pool = await getConnection();

  let connection;
  try {
    // Acquire a connection from the pool
    connection = await pool.getConnection();
    const [rows] = await connection.execute(sql, params);
    console.log("Executed query", {
      sql,
      rows: Array.isArray(rows) ? rows.length : 1,
    });
    const flatRows =
      Array.isArray(rows) && Array.isArray(rows[0]) ? rows.flat() : rows;

    return flatRows;
  } catch (error) {
    console.error("Error executing query", { sql, error });
    throw error;
  } finally {
    // Always release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
};

// Data fetching functions
export async function getJobUpdatesHome() {
  const sql =
    "SELECT * FROM job_notifications WHERE status='1' ORDER BY id DESC LIMIT 4";
  const results = await query(sql);
  return results;
}

export async function getLatestUpdatesHome() {
  const sql =
    "select  * from college_notification where status='1' order by id desc LIMIT 4";
  const results = await query(sql);
  return results;
}

export async function getCollegesHome() {
  const sql = `
    SELECT college, image, city_id, state_name, id, title_url
    FROM (
      SELECT 
        c.college,
        cd.image,
        cd.city_id,
        bc.category AS state_name,
        cd.id,
        c.title_url,
        ROW_NUMBER() OVER (PARTITION BY bc.category ORDER BY cd.id DESC) as rn
      FROM course_details cd
      JOIN college c ON cd.college_id = c.id
      JOIN banner_category bc ON bc.id = cd.state_id
    ) as ranked
    WHERE rn = 1
    LIMIT 8;
  `;
  const results = await query(sql);
  return results;
}

export async function searchColleges(searchTerm: string) {
  const sql = `
    SELECT 
      c.college,
      cd.image,
      cd.city_id,
      bc.category,
      cd.id,
      c.title_url
    FROM course_details cd
    JOIN college c ON cd.college_id = c.id
    JOIN banner_category bc ON bc.id = cd.state_id
    WHERE c.college LIKE ?
    LIMIT 10;
  `;
  const results = await query(sql, [searchTerm]);
  console.log("Search results:", results);
  return results;
}

export async function getPlacesHome() {
  const sql = `SELECT
    bc.category,
    bc.image,
    bc.id,
    bc.title_url,
    COUNT(cd.id) AS college_count
FROM
    course_details cd
JOIN banner_category bc ON
    cd.state_id = bc.id
GROUP BY
    bc.category, bc.image, bc.id, bc.title_url
ORDER BY
    college_count DESC
LIMIT 5;
`;
  const results = await query(sql);
  return results;
}

export const getLatestUpdates = async () => {
  const sql =
    "SELECT * FROM college_notification WHERE status='1' ORDER BY id DESC";
  const results = await query(sql);
  return results;
};

export const getLatestJobs = async () => {
  const sql =
    "SELECT * FROM job_notifications WHERE status='1' ORDER BY id DESC";
  const results = await query(sql);
  return results;
};

export const getColleges = async () => {
  const sql = `
  SELECT 
      c.college,
      cd.image,
      cd.review,
      bc.category AS state_name,
      bsc.sub_cat AS city_name,
      cd.id,
      c.title_url,
      ct.college_type AS college_type,
      d.direction AS direction_name,
      cat.category AS category_name
    FROM course_details cd
    LEFT JOIN college c ON cd.college_id = c.id
    LEFT JOIN category cat ON cd.cat_id = cat.id
    LEFT JOIN banner_category bc ON bc.id = cd.state_id
    LEFT JOIN banner_sub_category bsc ON bsc.id = cd.city_id
    LEFT JOIN direction d ON d.id = cd.direction_id
    LEFT JOIN college_type ct ON ct.id = cd.college_type
`;
  const results = await query(sql);
  return results;
};

export const getQuestionPapersByFilters = async (
  university_id?: string,
  year?: string,
  year_of_study?: string,
  subject_id?: string
) => {
  console.log(university_id, year, year_of_study, subject_id);
  let sql = `
    SELECT q.*, y.year, u.university, qu.question_type
        FROM question q
        JOIN year y ON q.question_year = y.id 
        JOIN university u ON q.uni_id = u.id
        JOIN question_type qu ON q.question_type_id = qu.id
        WHERE q.uni_id = ? AND q.question_year = ? AND q.paper_semester_year = ?
        ORDER BY q.question_year;
  `;

  const params = [university_id, year, year_of_study]

  const results = await query(sql, params);
  return results;
};

export const getUniversitiesForQuestionPapers = async () => {
  const sql = `
  SELECT uni.*, COUNT(question.id) as ttl_count 
  FROM university as uni 
  LEFT JOIN question ON uni.id = question.uni_id AND question.question_type_id !=0 
  WHERE uni.status = 1 
  GROUP by uni.id 
  ORDER BY ttl_count DESC
`;
  const results = await query(sql);
  return results;
};

export const getSubjects = async () => {
  const sql = `SELECT * FROM question_type`;
  const results = await query(sql);
  return results;
};

export const getYears = async () => {
  const sql = `SELECT * FROM year`;
  const results = await query(sql);
  return results;
};

export async function getStudentTestimonials() {
  try {
    // For demo purposes, return hardcoded data
    return [
      {
        id: 1,
        name: "Priya Sharma",
        college: "National Institute of Ayurveda, Jaipur",
        year: "Final Year",
        testimony:
          "AyuFinders helped me find the perfect college for my BAMS studies. Their detailed information about each college and admission process made my decision much easier.",
        rating: 5,
      },
      {
        id: 2,
        name: "Rahul Patel",
        college: "Institute of Teaching and Research in Ayurveda, Jamnagar",
        year: "Third Year",
        testimony:
          "The counselling services provided by AyuFinders were invaluable. They guided me through the entire admission process and helped me secure a seat in one of the top Ayurvedic colleges.",
        rating: 5,
      },
      {
        id: 3,
        name: "Ananya Singh",
        college: "All India Institute of Ayurveda, New Delhi",
        year: "Graduate",
        testimony:
          "Thanks to AyuFinders, I found a great job opportunity right after completing my BAMS. Their job updates section is a treasure trove for Ayurvedic graduates.",
        rating: 4,
      },
      {
        id: 4,
        name: "Vijay Kumar",
        college: "Government Ayurvedic College, Thiruvananthapuram",
        year: "Second Year",
        testimony:
          "The study materials and question papers available on AyuFinders have been extremely helpful for my exams. It's a one-stop resource for all BAMS students.",
        rating: 5,
      },
      {
        id: 5,
        name: "Sneha Verma",
        college: "Rajiv Gandhi Government Post-Graduate Ayurvedic College",
        year: "Graduate",
        testimony:
          "I found my dream college through AyuFinders. Their detailed profiles of colleges helped me make an informed decision. Now I'm working as an Ayurvedic physician.",
        rating: 5,
      },
      {
        id: 6,
        name: "Manish Rathi",
        college: "Shri Dhanwantri Ayurvedic College, Chandigarh",
        year: "Final Year",
        testimony:
          "From college reviews to mock counselling, AyuFinders has made my BAMS journey smooth and stress-free. Highly recommended!",
        rating: 5,
      },
      {
        id: 7,
        name: "Pooja Mehra",
        college: "Tilak Ayurved Mahavidyalaya, Pune",
        year: "Second Year",
        testimony:
          "I regularly visit AyuFinders for the latest updates on BAMS courses and competitive exams. The content is always accurate and helpful.",
        rating: 4,
      },
      {
        id: 8,
        name: "Rohit Sinha",
        college: "Ayurvedic College, Patna",
        year: "Third Year",
        testimony:
          "The guidance I received from AyuFinders was crucial in shortlisting my college choices. Their blogs are insightful and student-focused.",
        rating: 5,
      },
      {
        id: 9,
        name: "Isha Kapoor",
        college: "Dayanand Ayurvedic College, Jalandhar",
        year: "Graduate",
        testimony:
          "Whether it’s internships or PG options, AyuFinders provided me with valuable direction during every step of my career.",
        rating: 5,
      },
      {
        id: 10,
        name: "Amit Deshmukh",
        college: "R.A. Podar Ayurved Medical College, Mumbai",
        year: "First Year",
        testimony:
          "Being a new student, AyuFinders gave me clarity on what to expect from BAMS. Their orientation resources were extremely helpful.",
        rating: 4,
      },
    ];
  } catch (error) {
    console.error("Error fetching student testimonials:", error);
    throw error;
  }
}
