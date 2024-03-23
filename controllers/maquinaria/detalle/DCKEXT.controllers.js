import { pool } from "../../../src/db.js";

      


export const postDCKEXT = async(req, res)=>{
  const {
    id_CKEXT,
    id_limpiezaBazucaDeSalida,
    id_lubricarChumacerasAlFinalTurno,
    id_AccionamientoCorrectoMotor,
    id_verificarTornillosGuardasDeSeguridad,
    id_limpiezaInternaExternaEquipo,
    observacion1,
    observacion2,
    observacion3,
    observacion4,
    observacion5
    }= req.body
   
   
    try{
    
       const consulta=`INSERT INTO dckext(
        id_CKEXT,
        id_limpiezaBazucaDeSalida,
        id_lubricarChumacerasAlFinalTurno,
        id_AccionamientoCorrectoMotor,
        id_verificarTornillosGuardasDeSeguridad,
        id_limpiezaInternaExternaEquipo,
        observacion1,
        observacion2,
        observacion3,
        observacion4,
        observacion5) Values(?,?,?,?,?,?,?,?,?,?,?)`;
        const [rows]= await pool.query(consulta,[
          id_CKEXT,
          id_limpiezaBazucaDeSalida,
          id_lubricarChumacerasAlFinalTurno,
          id_AccionamientoCorrectoMotor,
          id_verificarTornillosGuardasDeSeguridad,
          id_limpiezaInternaExternaEquipo,
          observacion1,
          observacion2,
          observacion3,
          observacion4,
          observacion5
        ])
        res.send({rows});
        
        
    }catch(err){
        console.log('Error al guardar los datos', err)
    }
}




export const getDCKEXT= async(req, res)=>{
const id= req.params.id;

try {
  const consulta= `
  select 
  d.fecha_creacion,
  d.hora_creacion,
  id_CKEXT,
  r1.respuesta AS 'limpiezaBazucaDeSalida',
  r2.respuesta AS 'ilubricarChumacerasAlFinalTurno',
  r3.respuesta AS 'AccionamientoCorrectoMotor',
  r4.respuesta AS 'VerificarTornillosGuardasDeSeguridad',
  r5.respuesta AS 'limpiezaInternaExternaEquipo',
  d.observacion1,
  d.observacion2,
  d.observacion3,
  d.observacion4,
  d.observacion5
  
  
  FROM dckext d
  
  join respuestas r1 on d.id_limpiezaBazucaDeSalida = r1.id
  join respuestas r2 on d.id_lubricarChumacerasAlFinalTurno = r2.id
  join respuestas r3 on d.id_AccionamientoCorrectoMotor = r3.id
  join respuestas r4 on d.id_verificarTornillosGuardasDeSeguridad = r4.id
  join respuestas r5 on d.id_limpiezaInternaExternaEquipo = r5.id
  
  where d.id_CKEXT= ?
 
  `
  const [rows]= await pool.query(consulta, [id])
  res.status(200).json({ data: rows });
  
} catch (error) {
  console.error("Error al obtener los datos de la tabla dtp:", error);
  res.status(500).json({ error: "Error al obtener los datos de la tabla dtp" });
}

} 