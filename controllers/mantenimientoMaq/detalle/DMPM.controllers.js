import { pool } from "../../../src/db.js";

      


export const postDMPM = async(req, res)=>{
    const {
        id_MPM,
        id_estadomaq,
        id_tipoMantenimiento,
        id_revision,
        id_proveedor,
        id_responsable,
        detalle,
        creador
      } = req.body;
    
      try {
        if (
            id_MPM === '' ||
          id_estadomaq === '' ||
          id_tipoMantenimiento === '' ||
          id_revision === '' ||
          id_proveedor === '' ||
          id_responsable === '' ||
          detalle === '' ||
          creador === ''
        ) {
          res.status(400).send('Uno o varios datos están vacíos');
        } else {
          const consulta = `INSERT INTO dmpm (
            id_MPM,
            id_estadomaq,
            id_tipoMantenimiento,
            id_revision,
            id_proveedor,
            id_responsable,
            detalle,
            creador
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
          const [rows] = await pool.query(consulta, [
            id_MPM,
            id_estadomaq,
            id_tipoMantenimiento,
            id_revision,
            id_proveedor,
            id_responsable,
            detalle,
            creador
          ]);
          res.status(200).send({ rows });
        }
      } catch (err) {
        console.log('Error al guardar los datos', err);
        res.status(500).send('Error al guardar los datos');
      }
}




export const getDMPM= async(req, res)=>{
  const id= req.params.id;
  
  try {
    const consulta= `
   
select 
d.id_MPM,

est_maq.estado as estadomaq,
tipomantenimiento.tipo as tipoMantenimiento,
revisionmaquinaria.tipo as revision,
enc_prov.nombre as proveedor,
operarios.Nombre as responsable,

d.detalle,
d.fechaCreacion,
d.horaCreacion

from dmpm d

join est_maq on d.id_estadomaq = est_maq.id_est
join tipomantenimiento on d.id_tipoMantenimiento = tipomantenimiento.id
join revisionmaquinaria on d.id_revision = revisionmaquinaria.id
join enc_prov on d.id_proveedor = enc_prov.id_prov
join operarios on d.id_responsable = operarios.id
where d.id_MPM=?;
    
    `
    const [rows]= await pool.query(consulta, [id])
    res.status(200).json({ data: rows });
    
  } catch (error) {
    console.error("Error al obtener los datos de la tabla dtp:", error);
    res.status(500).json({ error: "Error al obtener los datos de la tabla dtp" });
  }
  
  } 