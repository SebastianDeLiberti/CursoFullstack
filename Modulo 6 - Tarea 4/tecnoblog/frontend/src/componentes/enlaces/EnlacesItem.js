import React from 'react';

const EnlacesItem = (props) => {

    const { nombre, enlace, descripcion } = props;

    return (

        <tr>

            <td><a href={enlace}>{nombre}</a></td>
            <td>{descripcion}</td>

        </tr>

    )

}

export default EnlacesItem;