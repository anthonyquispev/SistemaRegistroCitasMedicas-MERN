import React, { Component } from 'react'
import DoctorCard from './DoctorCard'
import axios from 'axios'

export default class Publico_StaffMedico extends Component {
    state = {
        medicos: [],
        especialidades: [],
        medicoSeleccionado: '',
        especialidad: '',
        especialidadSeleccionada: 'TODAS LAS ESPECIALIDADES',
        todasLasEspecialidades: 'TODAS LAS ESPECIALIDADES',
        medicoBusqueda: ''
    }

    componentDidMount() {
        this.getMedicos();
        this.getEspecialidades();
    }

    async getMedicos() {
        const res = await axios.get('http://localhost:4000/api/medicos');
        this.setState({ medicos: res.data });
    }
    async getEspecialidades() {
        const res = await axios.get('http://localhost:4000/api/especialidades');
        this.setState({
            especialidades: res.data.map(especialidad => especialidad.especialidad),
        });
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid pt-4">
                <div className="row px-4 pb-4 mb-4">
                    <h3 className="">Busca a tu Médico</h3>
                    <form className="row m-auto g-3">
                        <div className="col-md-5 ">
                            <input
                                type="text"
                                name="medicoBusqueda"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={this.onInputChange} />
                        </div>
                        <div className="col-md-5">
                            <select
                                id="Especialidades."
                                className="form-select"
                                name="especialidadSeleccionada"
                                onChange={this.onInputChange}
                                value={this.state.especialidadSeleccionada}
                            >
                                <option value={this.state.todasLasEspecialidades}>
                                    {this.state.todasLasEspecialidades}
                                </option>
                                {
                                    this.state.especialidades.map(especialidad =>
                                        <option key={especialidad} value={especialidad}>
                                            {especialidad}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="mw-100 btn btn-primary">Buscar</button>
                        </div>
                    </form>
                </div>

                <div className="row px-4">
                    <h3 className="">Nuestros Médicos</h3>
                    {
                        this.state.medicos.map(med =>

                            ((((this.state.especialidadSeleccionada === this.state.todasLasEspecialidades)) ||
                                ((this.state.especialidadSeleccionada === med.especialidad))) &&
                                (((med.nombres.toUpperCase().includes(this.state.medicoBusqueda.toUpperCase()))) ||
                                    (this.state.medicoBusqueda === '')))
                                ?
                                <DoctorCard
                                    img={med.imagen}
                                    name={med.nombres}
                                    specialty={med.especialidad}
                                    key={med._id}
                                />
                                :
                                ""
                        )
                    }
                </div>
            </div>
        )
    }
}
