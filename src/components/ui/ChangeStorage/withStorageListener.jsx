import React, { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent
                show={storageChange} 
                toggleShow={toggleShow}
            />
        )
    }
}


export default withStorageListener
