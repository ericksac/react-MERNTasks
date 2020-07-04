import React from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { useContext,useEffect } from 'react'

const ListadoProyectos = () => {


    //Extraer proeyctos de state inicial

    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //obtenere proyectos ucando carge el componente
    useEffect(()=>{
        obtenerProyectos();
    }, []);

    if(proyectos.length === 0) return null;


    return (
       <ul className="listado-proyectos">
           {
               proyectos.map(proyecto =>(
                   <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                   />
               ))
           }
       </ul>
    )
}

export default ListadoProyectos
