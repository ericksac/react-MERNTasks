import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer'

import {v4 as uuid} from 'uuid';
import {    FORMULARIO_PROYECTO,
            OBTENER_PROYECTOS,
            AGREGAR_PROYECTO,
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL
        } from '../../types'

const ProyectoState = props =>{

    const proyectos = [
        {id:1, nombre: 'Tienda virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño de Sitio web'}
    ];

    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obterner los proyectos
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS, 
            payload: proyectos

        });
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id= uuid();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //Valida el formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })

    }

    //sELECCIONA EL PROYECTO  que eel usuario dio click
    const proyectoActual  = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto, 
                mostrarError, 
                proyectoActual
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;