import React, { useState } from 'react'

/* 
Se define un High Order Component, que consta de un componente
"wrapper". A este componente wrapper se le pasa otro componente como
parámetro y le transfiere sus características.
*/

const withStorageListener = (WrappedComponent) => {
    /* 
    Se define el componente con el escuchador de cambios en el localStorage.
    Este componente tiene estado y funciones que le hereda al componente que le sea pasado
    como parámetro.
    */
    return function WrappedComponentWithStorageListener(props) {
        /* 
        Lo que hace este estado y este escuchador de eventos es que si en una pestaña
        hay un cambio, aparece un mensaje en otra pestaña y una opción para actualizar
        los datos.
        */
        const [storageChange, setStorageChange] = useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V2') {
                console.log('Hubo cambios')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        // Esta es la forma en la que withStorageListener le transfiere funciones y estados
        // al componente pasado como parámetro.
        return (
            <WrappedComponent
                show={storageChange} 
                toggleShow={toggleShow}
            />
        )
    }
}


export default withStorageListener
