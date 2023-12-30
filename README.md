# TODO MACHINE CON REACT ROUTER DOM
Aplicación que permite generar un listado de tareas pendientes, marcarlas como completadas, editar el texto, y eliminarlas.
Se usa enrutamiento con la librería react-router-dom para generar las siguientes rutas:
- Home
- New Task
- Edit Task
## useLocalStorage
Se creó el hook useLocalStorage para manejar el almacenamiento en el navegador y permitir la persistencia de datos. Dentro de este mismo hook se define un reducer para manejar el estado global de la aplicación, mediante la definición de action types y action creators.
## useTodos
Es un hook que hace uso del useLocalStorage, de sus funciones para persistencia de datos y de sus funciones actualizadoras de estado, para definir funciones que permiten agregar y eliminar todos, editarlos, marcarlos como terminados o por terminar, etc..
### Enrutamiento
