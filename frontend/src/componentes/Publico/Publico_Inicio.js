import React, { Component } from 'react';

import Publico_Slider from './Publico_Slider';
import Publico_HorariosAtencion from './Publico_HorariosAtencion';
import Publico_Video from './Publico_Video';
import Publico_Servicios from './Publico_Servicios'
import Publico_Suscribete from './Publico_Suscribete'
import Publico_TrabajaConNosotros from './Publico_TrabajaConNosotros'

export default class Publico_Inicio extends Component {
    render() {
        return (
            <div>
                
                {/* SLIDER IMÁGENES */}
                <Publico_Slider />

                {/* HORARIOS DE ATENCIÓN */}
                <Publico_HorariosAtencion />

                {/* VIDEO */}
                {/* <Publico_Video/> */}

                {/* SERVICIOS DE LA SEDE */}
                <Publico_Servicios />

                {/* SUSCRÍBETE */}
                <Publico_Suscribete />

                {/* TRABAJA CON NOSOTROZZZ */}
                <Publico_TrabajaConNosotros />

            </div>
        )
    }
}
