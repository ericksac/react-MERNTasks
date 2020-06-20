import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {

    //state para el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //Extraer campos del proyecto
    const {nombre} = proyecto;


    //Lee los contenidos del input
    const onChangeProyecto =e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario envia un proyecto nuevo
    const onSubmitProyecto = e =>{
         e.preventDefault();

        //Validar el proyecto

        //agregar el state

        //Reiniciar el form

    }

    return (
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
        >
            Nuevo Proyecto
        </button>
        <form className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
        >
            <input type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange = {onChangeProyecto}
            />
            <input type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
            />

        </form>
        </Fragment>


    )
}

export default NuevoProyecto
