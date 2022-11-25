import React from 'react';

const UltimosTutorialesItem = (props) => {

    const { fecha, portada, titulo } = props;

    return (

        <div className="post_wrapper">

            <div className="img_wrapper">

                <img src={portada} alt={titulo}></img>
                <a className="title" href={titulo}>{titulo}</a>

            </div>

            <div className="date">

                <i className="fa-regular fa-calendar-days"></i>
                <div>{fecha}</div>

            </div>

        </div>

    )

}

export default UltimosTutorialesItem;