import sql from "mssql";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

const dbSettings = {
  user: DB_USER,
  password: DB_PASSWORD,
  server: DB_HOST,
  database: DB_NAME,
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
