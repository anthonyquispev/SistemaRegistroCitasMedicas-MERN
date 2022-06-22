import React, { Component } from 'react'
import EspecialidadCard from './EspecialidadCard'
import axios from 'axios'

export default class Publico_Especialidades extends Component {

    state = {
        especialidades: [],
        especialidadSeleccionada: ''
    }

    componentDidMount() {
        this.getEspecialidades();
    }

    async getEspecialidades() {
        const res = await axios.get('http://localhost:4000/api/especialidades');
        this.setState({ especialidades: res.data });
    }

    render() {
        return (
            <div className="m-0 row px-4 pb-4 mb-4">
                <h3 className="py-4">Nuestras Especialidades</h3>
                {
                    this.state.especialidades.map(especialidad =>
                        <EspecialidadCard
                            name={especialidad.especialidad}
                            description={especialidad.descripcion}
                            img={especialidad.imagen}
                        />)
                }
            </div>
        )
    }
}
