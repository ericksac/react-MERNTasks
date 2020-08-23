import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer'

import { TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA, 
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';

const TareaState = props =>{
    const initialState= {
        tareas: [
            {id: 1, nombre: 'Elegir Plataforma', estado:true, proyectoId: 1},
            {id: 2, nombre: 'Elegir Colores', estado:true, proyectoId: 2},
            {id: 3, nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3},
            {id: 4, nombre: 'Elegir Hosting', estado:true, proyectoId: 4},
            {id: 5, nombre: 'Elegir Plataforma', estado:true, proyectoId: 1},
            {id: 6, nombre: 'Elegir Colores', estado:true, proyectoId: 2},
            {id: 7, nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3},
            {id: 8, nombre: 'Elegir Hosting', estado:true, proyectoId: 4},
            {id: 9, nombre: 'Elegir Plataforma', estado:true, proyectoId: 1},
            {id: 10, nombre: 'Elegir Colores', estado:true, proyectoId: 2},
            {id: 11, nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3},
            {id: 12, nombre: 'Elegir Hosting', estado:true, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);
    
    //Crear funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch ({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea =>{
        dispatch ({
            type: AGREGAR_TAREA,
            payload: tarea 
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea =()=>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea por id
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //EXTRAE UNA TAREA PARASU EDICION
    const guardarTareaActual = tarea =>{
        dispatch({
            type: TAREA_ACTUAL, 
            payload: tarea
        })
    }

    //Actualiza o edita una tarea
    const actualizarTarea = tarea =>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //Elimina la tareaseleccionada
    const limpiarTarea = () =>{
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas, 
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea, 
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;