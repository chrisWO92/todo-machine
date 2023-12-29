import { useEffect, useReducer, useState } from "react";

/* 
Definimos el hook useLocalStorage() que permitirá hacer persistencia de 
datos.

Se usará un reducer para el manejo del estado global en esta aplicación, 
y se definirá en este hook.

itemName: Nombre del objeto de datos guardado en el LocalStorage
defaultValue: Información que tendrá por defecto intemName si se encuentra vacío 
*/
const useLocalStorage = (itemName, defaultValue) => {

  // Estado inicial para el reducer 
  const initialState = {
    loading: true,
    error: false, 
    item: defaultValue,
    sinc: false, // Para indicar que la app está intentando conectar con base de datos
  }

  
  // Defino las acciones que actualizarán el estado 
  const actionTypes = {
    success: 'SUCCESS', // Conexión con DB completa
    error: 'ERROR', // No se logró conectar con DB
    save: 'SAVE', // Guardar tarea editada o nueva tarea
    sincronize: 'SINCRONIZE', // Realizar intento de sincronización con DB
  }

  // Defino el objeto con todos los tipos de acciones actualizadoras de estado
  const reducerObject = (state, payload) => ({
    // SUCCESSS es la acción que se ejecuta cuando se recarga la página, en el useEffect 
    // de la línea 67
    [actionTypes.success]: {...state, item: payload, loading: false, sinc: true},
    // El error pasado como payload es el obtenido con el catch del try-catch
    [actionTypes.error]: {...state, error: payload },
    // Acción para guardar un nuevo task o un task editado
    [actionTypes.save]: {...state, item: payload },
    // Acción para mostrar la animación de "loading"
    [actionTypes.sincronize]: {...state, loading: true, sinc: false }
  })

  /* 
  El reducer recibe como parámetro el state y la acción que se quiere realizar.
  Por la manera en que se usa y se configura el hook useReducer(), el reducer
  debe quedar de esta manera.
  */
  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
  }

  // Se invoca al hook useReducer(), pasandole el reducer y el estado inicial como parámetros.
  // Genera un array con el state y la función dispatch.
  // El state toma el valor de initialState, por eso luego podemos destructurarlo
  const [state, dispatch] = useReducer(reducer, initialState)

  // Se destructura el state
  const { item, loading, error, sinc } = state 

  /* 
  A partir de aquí se definen todos los action creators
  */

  const onSuccess = (item) => {
    dispatch({type: actionTypes.success, payload: item})
  }

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error})
  }

  const onSave = (item) => {
    dispatch({type: actionTypes.save, payload: item})
  }

  const onSinc = () => {
    dispatch({type: actionTypes.sincronize })
  }

  /* 
  Este useEffect se ejecuta siempre que se actualiza la applicación
  y cada vez que cambia el valor del estado "sinc"
  */
  useEffect(() => {
    try {
      setTimeout(() => {
        // Se consulta si hay objeto de datos guardado en el LocalStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Si no encuentra objeto en el LocalStorage con el nombre "itenName",
        // se crea de cero y se le asigna el objeto pasado como parámetro, 
        // llamado "defaultValue".
        // Si lo encuentra, lo parsea y lo guarda en "parsedItem" para poder
        // usarlo en los action creators.
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
          parsedItem = defaultValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        // onSuccess es como un save pero que pone el "loading" en false para 
        // no mostrar más la animación de carga
        onSuccess(parsedItem)
      }, 1000);
    } catch (err) {
      onError(err)
    }
  }, [sinc]);


  /* 
  saveItem() toma el objeto con el listado de tareas, la pasa a string y
  lo guarda en el localStorage.
  */
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      onSave(newItem)
    } catch (err) {
      onError(err)
    }
  };

  const sincronize = () => {
    onSinc()
  }

  return { item, saveItem, loading, error, sincronize };
};

export { useLocalStorage };
