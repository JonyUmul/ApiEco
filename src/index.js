    import express  from "express";
    import cors from 'cors'
    import bodyParser from "body-parser"
    import Loginroutes from './routes/Login.routes.js'
    // import Estadosroutes from './routes/mantenimientos/estados/Estados.routes.js'
    import Rolrouter from './routes/mantenimientos/roles/Roles.routes.js'
    import UsuariosR from './routes/mantenimientos/usuarios/Usuarios.routes.js'
    import TipoProv from './routes/mantenimientos/Tip_prov/Proveedores.routes.js'
    import EstadosMaq from './routes/mantenimientos/estados_maq/EstadosMaq.routes.js'
    import EstadosProc from './routes/mantenimientos/estados_proc/EstadosProc.routes.js'
    import Provedores from './routes/mantenimientos/proveedor/Proveedores.routes.js'
    import MateriaPrima from './routes/mantenimientos/materiaPrimas/MateriaPrimas.routes.js'
    import TablaOT from './routes/tablaOT/TablaOT.js'
    import TablaCp from './routes/tablaCP/TablaCP.js'
    import TablaMaquinaria from './routes/tablaMaquinaria/TablaMaquinaria.js'
    import OTHP from './routes/ordenesDeTrabajo/encabezados/OTHP.routes.js'
    import OTSA from './routes/ordenesDeTrabajo/encabezados/OTSMP.routes.js'
    import OTCA1 from './routes/ordenesDeTrabajo/encabezados/OTCA1.routes.js'
    import OTPV from './routes/ordenesDeTrabajo/encabezados/OTPV.routes.js'
    import OTFM from './routes/ordenesDeTrabajo/encabezados/OTFM.routes.js'
    import ModelosUF from './routes/mantenimientos/modelosUF/Modelos.routes.js'
    import OTP from './routes/ordenesDeTrabajo/encabezados/OTP.routes.js'
    import DTHP from "./routes/ordenesDeTrabajo/detallados/DTHP.routes.js";
    import Aserradero from './routes/mantenimientos/aserradero/Aserradero.routes.js'
    import Patios from './routes/mantenimientos/patios/Patios.routes.js'
    import DASERRIN from './routes/ordenesDeTrabajo/detallados/DASERRIN.routes.js'
    import TipoCernido from './routes/mantenimientos/tipoCernido/TipoCernido.routes.js'
    import DTCA1 from './routes/ordenesDeTrabajo/detallados/DTCA1.routes.js' 
    import OTCA2 from './routes/ordenesDeTrabajo/encabezados/OTCA2.routes.js'
    import DTCA2 from "./routes/ordenesDeTrabajo/detallados/DTCA2.routes.js"
    import DTPV from './routes/ordenesDeTrabajo/detallados/DTPV.routes.js'
    import DTFM from './routes/ordenesDeTrabajo/detallados/DTFM.routes.js'
    import Turnos from './routes/mantenimientos/turnos/Turnos.routes.js'
    import DTP from './routes/ordenesDeTrabajo/detallados/DTP.routes.js'
    import OTHH from './routes/ordenesDeTrabajo/encabezados/OTHH.routes.js'
    import maquinaria from './routes/mantenimientos/maquinaria/Maquinaria.routes.js'
    import Operarios from './routes/mantenimientos/operarios/OperariosAreas.routes.js'
    import DTHH from './routes/ordenesDeTrabajo/detallados/DTHH.routes.js'
    import CPS from './routes/controlProcesos/encabezados/CPS.routes.js'
    import CPB from './routes/controlProcesos/encabezados/CPB.routes.js'
    import CRM from './routes/controlProcesos/encabezados/CRM.routes.js'
    import CTT from './routes/controlProcesos/encabezados/CTT.routes.js'
    import CTH from './routes/controlProcesos/encabezados/CTH.routes.js'
    import calificacion from './routes/mantenimientos/calificacion/calificacion.js'
    import DCPS from './routes/controlProcesos/detallados/DCPS.routes.js'
    import modulosTarimas from './routes/mantenimientos/modulosTarimas/ModulosTarimas.routes.js'
    import DCPB from './routes/controlProcesos/detallados/DCPB.routes.js'
    import tipoMermas from './routes/mantenimientos/tipoMerma/TipoMerma.routes.js'
    import DRM from './routes/controlProcesos/detallados/DRM.routes.js'
    import DTT from './routes/controlProcesos/detallados/DTT.routes.js'
    import DTH from './routes/controlProcesos/detallados/DTH.routes.js'
    import CKTA from './routes/maquinaria/encabezados/CKTA.routes.js'
    import CKEXT from './routes/maquinaria/encabezados/CKEXT.routes.js'
    import CKBT from './routes/maquinaria/encabezados/CKBT.routes.js'
    import CKCTA from './routes/maquinaria/encabezados/CKCTA.routes.js'
    import CKCTAM from './routes/maquinaria/encabezados/CKTAM.routes.js'
    import CKM2 from './routes/maquinaria/encabezados/CKM2.routes.js'
    import CKMM from './routes/maquinaria/encabezados/CKMM.routes.js'
    import CKPH2 from './routes/maquinaria/encabezados/CKPH2.routes.js'
    import CKPHM from './routes/maquinaria/encabezados/CKPHM.routes.js'
    import CKPM from './routes/maquinaria/encabezados/CKPM.routes.js'
    import respuestas from './routes/mantenimientos/respuestas/Respuestas.routes.js'
    import DCKBT from './routes/maquinaria/detallados/DCKBT.routes.js'
    import DCKM2 from './routes/maquinaria/detallados/DCKM2.routes.js'
    import DCKEXT from './routes/maquinaria/detallados/DCKEXT.routes.js'
    import DCKCTA from './routes/maquinaria/detallados/DCKCTA.routes.js'
    import DCKCTAM from './routes/maquinaria/detallados/DCKCTAM.routes.js'
    import DCKMM from './routes/maquinaria/detallados/DCKMM.routes.js'
    import DCKPH2 from './routes/maquinaria/detallados/DCKPH2.routes.js'
    import DCKPHM from './routes/maquinaria/detallados//DCKPHM.routes.js'
    import DCKPM from './routes/maquinaria/detallados/DCKPM.routes.js'
    import DCKTA from './routes/maquinaria/detallados/DCKTA.routes.js'

    import MTA from './routes/mantenimientoMaq/encabezados/MTA.routes.js'
    import MEXT from './routes/mantenimientoMaq/encabezados/MEXT.routes.js'
    import MBT from './routes/mantenimientoMaq/encabezados/MBT.routes.js'
    import MCTA from  './routes/mantenimientoMaq/encabezados/MCTA.routes.js'
    import MTAM from './routes/mantenimientoMaq/encabezados/MCTAM.routes.js'
    import MM2 from './routes/mantenimientoMaq/encabezados/MM2.routes.js'
    import MMM from './routes/mantenimientoMaq/encabezados/MMM.routes.js'
    import MPH2 from './routes/mantenimientoMaq/encabezados/MPH2.routes.js'
    import MPHM from './routes/mantenimientoMaq/encabezados/MPHM.routes.js'
    import MPM from './routes/mantenimientoMaq/encabezados/MPM.routes.js'
    import MantenimientoMaq from './routes/tablaMantenimientoMaq/MantenimientoMaq.js'
    import RevisionMaquinaria from './routes/mantenimientos/revisionMaq/RevisionMaq.routes.js'

    import DMTA from './routes/mantenimientoMaq/detallados/DMTA.routes.js'
    import DMEXT from './routes/mantenimientoMaq/detallados/DMEXT.routes.js'
    import DMBT from './routes/mantenimientoMaq/detallados/DMBT.routes.js'
    import DMCTA from './routes/mantenimientoMaq/detallados/DMCTA.routes.js'
    import DMTAM from './routes/mantenimientoMaq/detallados/DMTAM.routes.js'
    import DMM2 from './routes/mantenimientoMaq/detallados/DMM2.routes.js'
    import DMMM from './routes/mantenimientoMaq/detallados/DMMM.routes.js'
    import DMPH2 from './routes/mantenimientoMaq/detallados/DMPH2.routes.js'
    import DMPHM from './routes/mantenimientoMaq/detallados/DMPHM.routes.js'
    import DMPM from './routes/mantenimientoMaq/detallados/DMPM.routes.js'
    import TipoMantenimiento from './routes/mantenimientos/tipoMantenimiento/tipoMantenimiento.js'
    


    const app = express()

    // app.use(cors);
    app.use(cors({
      
      origin: 'https://appproduccion.onrender.com', // Utiliza la variable de entorno correcta
      methods: ['GET', 'POST', 'PUT'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    }));
    app.use(bodyParser.json());
    app.use(express.json())   

    //login
    app.use(Loginroutes);


    //login
    app.use(TipoCernido);

    //login
    app.use(TipoMantenimiento);

    //Estados Maquinaria
    app.use(EstadosMaq);

    //Estados Maquinaria
    app.use(RevisionMaquinaria);

    //Turnos de Produccion
    app.use(Turnos);

    //Turnos de Produccion
    app.use(Turnos);

    //Hornos
    app.use(maquinaria);

    app.use(modulosTarimas);
    app.use(tipoMermas);

    //Aserradero
    app.use(Aserradero);

    //Patios
    app.use(Patios);

    //Estado Procesos
    app.use(EstadosProc)

    //Roles
    app.use(Rolrouter);

    //Calificaciones
    app.use(calificacion);
    app.use(respuestas);

    //Usuarios
    app.use(UsuariosR);

    //Tipo Proveedores
    app.use(TipoProv);

    //Obtener-Crear Proveedores
    app.use(Provedores)

    //Obtener-Crear Materia Primas
    app.use(MateriaPrima)

    //Tabla Ordenes de Trabajo
    app.use(TablaOT)
    app.use(TablaCp)
    app.use(TablaMaquinaria)

    //Modelos UF
    app.use(ModelosUF)

    //OT Secado de aserrin y detallado
    app.use(OTSA)
    app.use(DASERRIN)

    //OT Cernido de aserrin 1 y DEtalle Cernido 1
    app.use(OTCA1)
    app.use(DTCA1)

    //Encabezado Cernido de aserrin 2 y Detalle Cernido 2
    app.use(OTCA2)
    app.use(DTCA2)

    //OT  Pulverizado MP y detyalle de pulverizado
    app.use(OTPV)
    app.use(DTPV)

    //OT Formulacion
    app.use(OTFM)
    app.use(DTFM)

    //OT Producción
    app.use(OTP)
    app.use(DTP)

    //Detalle Toma de Humedad Y OT Humedad en Patios
    app.use(DTHP)
    app.use(OTHP)

    //Hornos
    app.use(OTHH)
    app.use(DTHH)

    //Personal por area
    app.use(Operarios)

    //Encabezados Control Procesos
    app.use(CPS)
    app.use(CPB)
    app.use(CRM)
    app.use(CTT)
    app.use(CTH)
    //Detalles Control Procesos
    app.use(DCPS)
    app.use(DCPB)
    app.use(DRM)
    app.use(DTT)
    app.use(DTH)


    //Encabezados Maquinaria
    app.use(CKTA)
    app.use(CKEXT)
    app.use(CKBT)
    app.use(CKCTA)
    app.use(CKCTAM)
    app.use(CKM2)
    app.use(CKMM)
    app.use(CKPH2)
    app.use(CKPHM)
    app.use(CKPM)

    //Detalle Maquinaria
    app.use(DCKBT)
    app.use(DCKM2)
    app.use(DCKEXT)
    app.use(DCKCTA)
    app.use(DCKCTAM)
    app.use(DCKMM)
    app.use(DCKPH2)
    app.use(DCKPHM)
    app.use(DCKPM)
    app.use(DCKTA)


    //Encabezados mantenimento Maquinaria
    app.use(MantenimientoMaq)
    app.use(MTA)
    app.use(MEXT)
    app.use(MBT)
    app.use(MCTA)
    app.use(MTAM)
    app.use(MM2)
    app.use(MMM)
    app.use(MPH2)
    app.use(MPHM)
    app.use(MPM)
    //Detalle mantenimento Maquinaria
    app.use(DMTA)
    app.use(DMEXT)
    app.use(DMBT)
    app.use(DMCTA)
    app.use(DMTAM)
    app.use(DMM2)
    app.use(DMMM)
    app.use(DMPH2)
    app.use(DMPHM)
    app.use(DMPM)

  
    app.listen(process.env.PORT || 3001)

    console.log('puerto escuchando en el puerto 3001')