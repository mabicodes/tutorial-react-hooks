import React, { useState } from 'react';
import TablaUsuarios from './tablas/TablaUsuario';

const App = () => {

    const datosUsuario = [
        { id: 1, nombre: 'Edu', apellido: 'Lázaro' },
        { id: 2, nombre: 'Ana', apellido: 'Rodríguez' },
        { id: 3, nombre: 'Marcos', apellido: 'González' },
    ];

    const [usuarios, setUsuarios] = useState(datosUsuario);

    return (
        <div className="container">
            <h1>Tutorial React Hooks</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2>Agregar usuario</h2>
                </div>
                <div className="col-md-4">
                    <h2>Ver usuarios</h2>
                    <TablaUsuarios usuarios={usuarios} />
                </div>
            </div>
        </div>
    );
}

export default App;