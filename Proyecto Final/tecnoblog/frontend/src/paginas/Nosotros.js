import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import NosotrosItem from '../componentes/nosotros/NosotrosItem';
import "../estilos/componentes/paginas/Nosotros.css"
import NosotrosScript from '../scripts/NosotrosScript.js';

const Nosotros = (props) => {

    const [loading, setLoading] = useState(false);
    const [nosotros, setNosotros] = useState([]);

    useEffect(() => {

        const cargarNosotros = async () => {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/nosotros');
            setNosotros(response.data);
            setLoading(false);

        }

        cargarNosotros();

    }, []);

    return (

        <main>

            <div className="wrapper">

                <div id="main_content">

                    {

                        loading ? (

                            <p>Cargando...</p>

                        ) : (

                            nosotros.map(item => <NosotrosItem key={item.id_nosotros} nombre_usuario={item.nombre_usuario} foto_usuario={item.foto_perfil} cuerpo={item.texto} instagram={item.sm_inst} facebook={item.sm_face} twitter={item.sm_twit} />)
                            
                        )

                    }

                </div>

            </div>

            <NosotrosScript />

        </main>

    );

}

export default Nosotros;