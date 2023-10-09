import React from "react";
import "./changeStorage.css";
import withStorageListener from "./withStorageListener";

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

const ChangeStorageWithListener = withStorageListener(ChangeStorage);

export default ChangeStorageWithListener;
