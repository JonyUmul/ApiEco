import { pool } from "../../../src/db.js";

      


export const postDCKPM = async(req, res)=>{
  const {
    id_CKPM,
    id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral,
    id_AccionamientoCorrectoMotorBomba ,
    id_NivelDeAceiteEnTanqueHidraulicoCorrecto ,
    id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite ,
    id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar ,
    id_EstructuraPrensaEncuentraSinFisuras ,
    id_EstructuraDeMoldesEncuentraSinFisurasDefectos ,
    id_LimpiezaLubricacionBarrasBujesEquipoAnterior ,
    id_IntegridadBujesBarrasPrincipalesOptimas ,
    id_creador ,
       observacion1,
    observacion2,
    observacion3,
    observacion4,
    observacion5,
    observacion6,
    observacion7,
    observacion8,
    observacion9,
    }= req.body
   
   
    try{
    if(id_CKPM===''||
    id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral===''||
      id_AccionamientoCorrectoMotorBomba ===''||
      id_NivelDeAceiteEnTanqueHidraulicoCorrecto ===''||
      id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite ===''||
      id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar ===''||
      id_EstructuraPrensaEncuentraSinFisuras ===''||
      id_EstructuraDeMoldesEncuentraSinFisurasDefectos ===''||
      id_LimpiezaLubricacionBarrasBujesEquipoAnterior ===''||
      id_IntegridadBujesBarrasPrincipalesOptimas ){

        const consulta=`INSERT INTO dckpm (
          id_CKPM,  
          id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral,
    id_AccionamientoCorrectoMotorBomba ,
    id_NivelDeAceiteEnTanqueHidraulicoCorrecto ,
    id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite ,
    id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar ,
    id_EstructuraPrensaEncuentraSinFisuras ,
    id_EstructuraDeMoldesEncuentraSinFisurasDefectos ,
    id_LimpiezaLubricacionBarrasBujesEquipoAnterior ,
    id_IntegridadBujesBarrasPrincipalesOptimas ,

    id_creador ,

       observacion1,
    observacion2,
    observacion3,
    observacion4,
    observacion5,
    observacion6,
    observacion7,
    observacion8,
    observacion9) Values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
              const [rows]= await pool.query(consulta,[
                id_CKPM,
                id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral,
                id_AccionamientoCorrectoMotorBomba ,
                id_NivelDeAceiteEnTanqueHidraulicoCorrecto ,
                id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite ,
                id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar ,
                id_EstructuraPrensaEncuentraSinFisuras ,
                id_EstructuraDeMoldesEncuentraSinFisurasDefectos ,
                id_LimpiezaLubricacionBarrasBujesEquipoAnterior ,
                id_IntegridadBujesBarrasPrincipalesOptimas ,
                id_creador ,
                observacion1,
                observacion2,
                observacion3,
                observacion4,
                observacion5,
                observacion6,
                observacion7,
                observacion8,
                observacion9
              ])
              res.send({rows});
      }else{
        res.status(400).send('Uno o varios datos están vacíos');
      }

     
        
        
    }catch(err){
        console.log('Error al guardar los datos', err)
    }
}




export const getDCKPM= async(req, res)=>{
const id= req.params.id;

try {
  const consulta= `
	select 
    d.fecha_creacion,
    d.hora_creacion,
    d.id_CKPM,
    r1.respuesta AS 'id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral',
    r2.respuesta AS 'id_AccionamientoCorrectoMotorBomba',
    r3.respuesta AS 'id_NivelDeAceiteEnTanqueHidraulicoCorrecto',
    r4.respuesta AS 'id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite',
    r5.respuesta AS 'id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar',
    r6.respuesta AS 'id_EstructuraPrensaEncuentraSinFisuras',
	r7.respuesta AS 'id_EstructuraDeMoldesEncuentraSinFisurasDefectos',
	r8.respuesta AS 'id_LimpiezaLubricacionBarrasBujesEquipoAnterior',
	r9.respuesta AS 'id_IntegridadBujesBarrasPrincipalesOptimas',
    user.username AS 'creador',
    d.observacion1,
    d.observacion2,
    d.observacion3,
    d.observacion4,
    d.observacion5,
    d.observacion6,
    d.observacion7,
    d.observacion8,
    d.observacion9

    FROM dckpm d
    
    join respuestas r1 on d.id_GrupoAnteriorCompletoSatisfactoriamenteLimpiezaGeneral = r1.id
    join respuestas r2 on d.id_AccionamientoCorrectoMotorBomba = r2.id
    join respuestas r3 on d.id_NivelDeAceiteEnTanqueHidraulicoCorrecto = r3.id
    join respuestas r4 on d.id_MangueraHidraulicaEstaEnBuenEstadoSinFugasAceite = r4.id
    join respuestas r5 on d.id_FuncionamientoCorrectamenteCilindroHidraulicoParaSubirBajar = r5.id
    join respuestas r6 on d.id_EstructuraPrensaEncuentraSinFisuras = r6.id
	join respuestas r7 on d.id_EstructuraDeMoldesEncuentraSinFisurasDefectos = r7.id
	join respuestas r8 on d.id_LimpiezaLubricacionBarrasBujesEquipoAnterior = r8.id
	join respuestas r9 on d.id_IntegridadBujesBarrasPrincipalesOptimas = r9.id
	join user on d.id_creador= user.id
     where d.id_CKPM =?;
  `
  const [rows]= await pool.query(consulta, [id])
  res.status(200).json({ data: rows });
  
} catch (error) {
  console.error("Error al obtener los datos de la tabla dtp:", error);
  res.status(500).json({ error: "Error al obtener los datos de la tabla dtp" });
}

} 