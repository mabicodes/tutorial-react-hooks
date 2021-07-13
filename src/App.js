import React, { useState } from 'react';
import TablaUsuario from './tablas/TablaUsuario';
import FormularioAgregarUsuario from './forms/FormularioAgregarUsuario';
import FormularioEditarUsuario from './forms/FormularioEditarUsuario';

const App = () => {

    const datosUsuario = [
        { id: 1, nombre: 'illidanna3', apellido: 'mangaq99@hotmail.com' },
        { id: 2, nombre: 'Road2Challenger', apellido: 'tumoritokun@gmail.com' },
        { id: 3, nombre: 'YasuoR4Trash', apellido: 'twofingergaming@gmail.com' },
    ];

    const [usuarios, setUsuarios] = useState(datosUsuario);

    const agregarUsuario = (usuario) => {
        usuario.id = usuarios.length + 1;
        setUsuarios([...usuarios, usuario]);
    }
    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        setEditando(false);
    }
    const [editando, setEditando] = useState(false);
    const estadoInicialFormularioEdicion = { id: null, nombre: '', apellido: '' };
    const [usuarioActual, setUsuarioActual] = useState(estadoInicialFormularioEdicion);
    const editarUsuario = (usuario) => {
        setEditando(true);
        setUsuarioActual({ id: usuario.id, nombre: usuario.nombre, apellido: usuario.apellido });
    }
    const actualizarUsuario = (id, usuarioActualizado) => {
        setEditando(false);
        const usuariosActualizados = usuarios.map((usuario) => (usuario.id === id ? usuarioActualizado : usuario));
        setUsuarios(usuariosActualizados);
    }

    return (
        <div className="container">
            <h1>GameINC shuffle EUW </h1>
            <div className="row">
                {editando ? (
                    <div className="col-md-4">
                        <h2>Editar</h2>
                        <FormularioEditarUsuario
                            setEditando={setEditando}
                            usuarioActual={usuarioActual}
                            actualizarUsuario={actualizarUsuario}
                        />
                    </div>
                ) : (
                    <div className="col-md-4">
                        <h5>Register for FREE League of Legends skin shuffle! </h5>
                        <FormularioAgregarUsuario agregarUsuario={agregarUsuario} />
                    </div>
                )}
                <div className="col-md-4">
                    <h2>Registered users</h2>
                    <TablaUsuario usuarios={usuarios} editarUsuario={editarUsuario} eliminarUsuario={eliminarUsuario} />
                </div>
            </div>
        </div>
    );
}

export default App;