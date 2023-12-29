import React from "react";
import "./changeStorage.css";
import withStorageListener from "./withStorageListener";

/* 
Este componente será el que se le pase como parámetro al HOC.
Por este motivo es que destructuramos en las props a las funciones 
show y toggleshow que vienen de withStorageListener.

Sin embargo, será el final de este archivo que recién le indiquemos
a la aplicación que este componente herederá esas funciones de 
withStorageListener.

La idea de este componente es mostrar cuando se abre la aplicación
en diferentes pestañas del navegador, y mostrar cuando en alguna de ellas
hubo un cambio en el LocalStorage.
*/
const ChangeStorage = ({show, toggleShow}) => {
    if (show) {
        return (
            <div id='sinc-container'>
                <p id='sinc-msg'>Hubo cambios</p>
                <button
                    id='sinc-button'
                    onClick={() => toggleShow(false)}
                >
                    Volver a cargar
                </button>
            </div>
        ) 
    } else {
        return null
    }
}

// Con esta línea se le pasan todas las propiedades de withStorageListener a ChangeStorage,
// generando así un nuevo componente.
const ChangeStorageWithListener = withStorageListener(ChangeStorage);

export default ChangeStorageWithListener;
