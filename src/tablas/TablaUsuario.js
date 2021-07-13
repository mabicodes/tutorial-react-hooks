import React from 'react';

const TablaUsuarios = () => (
    <table className="table mt-4">
        <thead className="thead-dark">
        <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Dukecito</td>
            <td>Nukemito</td>
            <td>
                <button type="button" className="btn btn-primary btn-sm m-1">Editar</button>
                <button type="button" className="btn btn-primary btn-sm m-1">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
)

export default TablaUsuarios;