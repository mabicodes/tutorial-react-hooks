import React, { useState } from 'react';
import TablaUsuario from './tablas/TablaUsuario';
import FormularioAgregarUsuario from './forms/FormularioAgregarUsuario';

const App = () => {

    const datosUsuario = [
        { id: 1, nombre: 'Edu', apellido: 'Lázaro' },
        { id: 2, nombre: 'Ana', apellido: 'Rodríguez' },
        { id: 3, nombre: 'Marcos', apellido: 'González' },
    ];

    const [usuarios, setUsuarios] = useState(datosUsuario);

    const agregarUsuario = (usuario) => {
        usuario.id = usuarios.length + 1;
        setUsuarios([...usuarios, usuario]);
    }

    return (
        <div className="container">
            <h1>Tutorial React Hooks</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2>Agregar usuario</h2>
                    <FormularioAgregarUsuario agregarUsuario={agregarUsuario} />
                </div>
                <div className="col-md-4">
                    <h2>Ver usuarios</h2>
                    <TablaUsuario usuarios={usuarios} />
                </div>
            </div>
        </div>
    );
}

export default App;