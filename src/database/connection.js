import sql from "mssql";

const dbSettings = {
  user: "javierd2_ea_006",
  password: "sasasa0",
  server: "198.38.83.33",
  database: "javierd2_ea_006",
  options: { encrypt: false, trustServerCertificate: false },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

export { sql };
