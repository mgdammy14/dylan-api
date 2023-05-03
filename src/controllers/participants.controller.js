import { getConnection, sql } from "../database/connection";

export const getParticipants = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("Select * from Participantes");
  res.json(result.recordset);
};

export const createParticipants = async (req, res) => {
  const { nombreCompleto, dni, rifas } = req.body;
  const pool = await getConnection();
  await pool
    .request()
    .input("nombreCompleto", sql.Text, nombreCompleto)
    .input("dni", sql.Text, dni)
    .input("rifas", sql.Int, rifas)
    .query(
      "INSERT INTO Participantes (nombreCompleto, dni, rifas) VALUES (@nombreCompleto, @dni, @rifas)"
    );

  res.json("new participant");
};
