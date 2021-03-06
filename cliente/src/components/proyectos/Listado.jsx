import React from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { useContext, useEffect } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListadoProyectos = () => {


    //Extraer proeyctos de state inicial

    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //obtenere proyectos ucando carge el componente
    useEffect(() => {
        obtenerProyectos();

        //eslint-disable-next-line
    }, []);

    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyectos
