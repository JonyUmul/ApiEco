import { pool } from "../../../src/db.js";

      


export const postDCKPH2 = async(req, res)=>{
  const {
    id_CKPH2,
    id_verificadoCorrectoAccionamientoDebomba,
	  id_sensorInfrarrojaLimpio,
    id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente,
    id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite,
    id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños,
    id_elGrupoAnteriorCompletoSatisfactoriamenteLimpiezaGenera,
 
	id_creador,
    
   observacion1,
   observacion2,
   observacion3,
   observacion4,
   observacion5,	
   observacion6
    }= req.body
   
   
    try{
    if(id_verificadoCorrectoAccionamientoDebomba===''||
      id_sensorInfrarrojaLimpio===''||
      id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente===''||
      id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite===''||
      id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños===''||
      id_elGrupoAnteriorCompletoSatisfactoriamenteLimpiezaGenera){

        const consulta=`INSERT INTO dckph2 (
          id_CKPH2,
          id_verificadoCorrectoAccionamientoDebomba,
          id_sensorInfrarrojaLimpio,
          id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente,
          id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite,
          id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños,
          id_elGrupoAnteriorCompletoSatisfactoriamenteLimpiezaGenera,
       
        id_creador,
          
         observacion1,
         observacion2,
         observacion3,
         observacion4,
         observacion5,	
         observacion6) Values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
              const [rows]= await pool.query(consulta,[
                id_CKPH2,
                id_verificadoCorrectoAccionamientoDebomba,
                id_sensorInfrarrojaLimpio,
                id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente,
                id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite,
                id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños,
                id_elGrupoAnteriorCompletoSatisfactoriamenteLimpiezaGenera,
             
              id_creador,
                
               observacion1,
               observacion2,
               observacion3,
               observacion4,
               observacion5,	
               observacion6
              ])
              res.send({rows});
      }else{
        res.status(400).send('Uno o varios datos están vacíos');
      }

     
        
        
    }catch(err){
        console.log('Error al guardar los datos', err)
    }
}




export const getDCKPH2= async(req, res)=>{
const id= req.params.id;

try {
  const consulta= `
  select 
  d.fechaCreacion,
  d.horaCreacion,
  d.id_CKPH2,
  r1.respuesta AS 'id_verificadoCorrectoAccionamientoDebomba',
  r2.respuesta AS 'id_sensorInfrarrojaLimpio',
  r3.respuesta AS 'id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente',
  r4.respuesta AS 'id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite',
  r5.respuesta AS 'id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños',
  r6.respuesta AS 'id_elGrupoAnteriorCompletoSatisfactoriamenteLimpiezaGenera',

  user.username AS 'creador',
  d.observacion1,
  d.observacion2,
  d.observacion3,
  d.observacion4,
  d.observacion5,
  d.observacion6


  
  FROM dckph2 d
  
  join respuestas r1 on d.id_verificadoCorrectoAccionamientoDebomba = r1.id
  join respuestas r2 on d.id_sensorInfrarrojaLimpio = r2.id
  join respuestas r3 on d.id_SecompruebaSensorBarreraInfrarrojaFuncionaCorrectamente = r3.id
  join respuestas r4 on d.id_mangueraHidráulicaEstaEnBuenEstadoSinFugasAceite = r4.id
  join respuestas r5 on d.id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños = r5.id
  join respuestas r6 on d.id_integridadDeLosBujesYBarrasPrincipalesEstaBuenEstadoSinDaños = r6.id
join user on d.id_creador= user.id
   where d.id_CKPH2 =?;
  `
  const [rows]= await pool.query(consulta, [id])
  res.status(200).json({ data: rows });
  
} catch (error) {
  console.error("Error al obtener los datos de la tabla dtp:", error);
  res.status(500).json({ error: "Error al obtener los datos de la tabla dtp" });
}

} 