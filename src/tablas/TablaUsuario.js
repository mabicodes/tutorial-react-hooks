import React from 'react';

const TablaUsuario = (props) => (
    <table className="table mt-4">
        <thead className="thead-dark">
        <tr>
            <th>IGN </th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.usuarios.length > 0 ? (
            props.usuarios.map((usuario) => (
                <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm m-1"
                            onClick={() => props.editarUsuario(usuario)}> Edit </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm m-1"
                            onClick={() => props.eliminarUsuario(usuario.id)}> Delete </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No registry</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default TablaUsuario;