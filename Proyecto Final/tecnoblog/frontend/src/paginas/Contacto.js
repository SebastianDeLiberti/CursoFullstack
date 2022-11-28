import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import "../estilos/componentes/paginas/Contacto.css"

const Contacto = (props) => {

    const initialForm = {

        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''

    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {

        const { name, value } = e.target;

        setFormData(oldData => ({

            ...oldData,
            [name]: value

        }));

    }

    const handleSubmit = async e => {

        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {

            setFormData(initialForm)

        }

    }

    return(

        <main>

            <div className="wrapper">

                    <div id="main_content">

                        <h2>Información de Contacto</h2>

                        <form id="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>

                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                            </p>
                            <p>
                                <label for="email">Correo Electrónico</label>
                                <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                            </p>
                            <p>
                                <label for="telefono">Teléfono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                            </p>
                            <p>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                            </p>
                            <p>
                                <input type="submit" value="Enviar"></input>
                            </p>

                        </form>
                        
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}

                    </div>

            </div>

        </main>

    );

}

export default Contacto;