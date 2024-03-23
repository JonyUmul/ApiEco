import { pool } from "../../../src/db.js";

export const postDASERRIN = async (req, res) => {
  const { id_OTSaserrin, id_asrd, id_patio, cantidad_inicial, cantidad_final } =
    req.body;
  console.log(id_OTSaserrin);
  try {
    if (
      id_OTSaserrin === "" ||
      id_asrd === "" ||
      id_patio === "" ||
      cantidad_inicial === "" ||
      cantidad_final === ""
    ) {
      console.log("Uno o varios datos están vacíos");
    } else {
      const consulta =
        "INSERT INTO daserrin(id_OTSaserrin, id_asrdSMP, id_patio, cantidad_inicial, cantidad_final) VALUES (?, ?, ?, ?, ?)";
      const [rows] = await pool.query(consulta, [
      id_OTSaserrin,
      id_asrd,
      id_patio,
      cantidad_inicial,
      cantidad_final
      ]);
      res.send({ rows });
    }
  } catch (err) {
    console.log("Error al guardar los datos", err);
  }
};



export const getDASERRIN = async (req, res) => {
  const id = req.params.id;
  try {
    // Consulta SQL para obtener todos los registros de la tabla dtp
    const consulta = `
    select 
		d.id,
		d.cantidad_inicial,
		d.cantidad_final,
		d.fecha_creacion,
		otsa.id AS id_otsa,
		aserradero.nombre_aserradero AS aserradero,
		patios.nombrePatio AS patio
	

	FROM 
		daserrin d
	JOIN 
		otsa ON d.id_OTSaserrin = otsa.id
	JOIN 
		aserradero ON d.id_asrdSMP = aserradero.id
	JOIN 
		patios ON d.id_patio = patios.id	

    where otsa.id= ?

`;
    const [rows] = await pool.query(consulta, [id]);

    // Enviar los datos obtenidos al cliente
    res.status(200).json({ data: rows });
  } catch (error) {
    // Manejar errores de manera adecuada
    console.error("Error al obtener los datos de la tabla dtp:", error);
    res.status(500).json({ error: "Error al obtener los datos de la tabla dtp" });
  }
};




export const getDASERRI = async (req, res) => {
  const { id_asrdSMP, fecha_creacion, id_patio } = req.params; // Obtener los parámetros de la URL

  try {
      let consulta = `
      SELECT 
      d.id,
      d.cantidad_inicial,
      (d.cantidad_inicial - d.cantidad_final) AS merma,
      d.cantidad_final,
      d.hora_creacion,
      d.fecha_creacion,
      otsa.id AS id_OTSA,
      aserradero.nombre_aserradero AS aserradero,
      patios.nombrePatio AS patio
  FROM 
      daserrin d
  JOIN 
      otsa ON d.id_OTSaserrin = otsa.id
  JOIN 
      aserradero ON d.id_asrdSMP = aserradero.id
  JOIN 
      patios ON d.id_patio = patios.id
  
  WHERE 1=1`;

      const params = [];

      if (id_patio !== 'null') {
          consulta += ' AND (d.id_patio IS NULL OR d.id_patio = ?)';
          params.push(id_patio);
      }

      if (id_asrdSMP !== 'null') {
          consulta += ' AND (d.id_asrdSMP IS NULL OR d.id_asrdSMP = ?)';
          params.push(id_asrdSMP);
      }

      if (fecha_creacion !== 'null') {
          consulta += ' AND (d.fecha_creacion IS NULL OR d.fecha_creacion = ?)';
          params.push(fecha_creacion);
      }

      const [rows] = await pool.query(consulta, params);

      res.status(200).json(rows);
  } catch (error) {
      console.error("Error al obtener los datos de la tabla dthp:", error);
      res.status(500).json({ error: "Error al obtener los datos de la tabla dthp" });
  }
};
