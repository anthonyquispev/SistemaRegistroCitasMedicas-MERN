import React, { Component } from 'react'

import axios from 'axios'
import { Auth0Context } from '@auth0/auth0-react'

export default class Usuario_FormularioDatos extends Component {
    static contextType = Auth0Context;

    state = {
        correo: '',
        apellidos: '',
        nombres: '',
        distrito: ''
    }

    async componentDidMount() {
        const { user } = this.context;
        this.setState({ correo: user.email })
    }

    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/usuarios', {
            correo: this.state.correo,
            apellidos: this.state.apellidos,
            nombres: this.state.nombres,
            distrito: this.state.distrito
        });
        window.location.href = '/';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container p-4 text-secondary">
                <h2 className="fw-normal-lg text-center py-3"><b>Formulario de datos personales</b></h2>
                <p className="text-success">(*) Ingrese sus datos en el siguiente formulario para poder reservar una cita</p>

                <form onSubmit={this.onSubmit}>
                    <div className="row py-2">
                        <div className="col-md-4">
                            <label className="form-label">Apellidos</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"
                                name="apellidos"
                                onChange={this.onInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Nombres</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombres"
                                name="nombres"
                                onChange={this.onInputChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" />
                        </div>

                    </div>
                    <div className="row py-2">
                        <div className="col-md-4">
                            <label className="form-label">Tipo de Documento</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar</option>
                                <option value="1">DNI</option>
                                <option value="2">Carné de Extranjería</option>
                                <option value="3">Pasaporte</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">N° de Documento</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Confirmar N° de Documento</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-4">
                            <label className="form-label">Sexo</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Dirección</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-4">
                            <label className="form-label">Departamento</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar</option>
                                <option value="1">AMAZONAS</option>
                                <option value="2">ANCASH</option>
                                <option value="3">APURÍMAC</option>
                                <option value="4">AREQUIPA</option>
                                <option value="5">AYACUCHO</option>
                                <option value="6">CAJAMARCA</option>
                                <option value="7">CALLAO</option>
                                <option value="8">CUSCO</option>
                                <option value="9">HUANCAVELICA</option>
                                <option value="10">HUÁNUCO</option>
                                <option value="11">ICA</option>
                                <option value="12">JUNÍN</option>
                                <option value="13">LA LIBERTAD</option>
                                <option value="14">LAMBAYEQUE</option>
                                <option value="15">LIMA</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Provincia</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar</option>
                                <option value="1">LIMA</option>
                                <option value="2">BARRANCA</option>
                                <option value="3">CAJATAMBO</option>
                                <option value="4">CANTA</option>
                                <option value="5">CAÑETE</option>
                                <option value="6">HUARAL</option>
                                <option value="7">HUAROCHIRÍ</option>
                                <option value="8">HUAURA</option>
                                <option value="9">OYÓN</option>
                                <option value="10">YAUYOS</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Distrito</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="distrito"
                                onChange={this.onInputChange}
                                value={this.state.distrito}>
                                <option selected>Seleccionar</option>
                                <option value="ANCÓN">ANCÓN</option>
                                <option value="ATE">ATE</option>
                                <option value="BARRANCO">BARRANCO</option>
                                <option value="BREÑA">BREÑA</option>
                                <option value="CARABAYLLO">CARABAYLLO</option>
                                <option value="CHACLACAYO">CHACLACAYO</option>
                                <option value="CHORRILLOS">CHORRILLOS</option>
                                <option value="CIENEGUILLA">CIENEGUILLA</option>
                                <option value="COMAS">COMAS</option>
                                <option value="EL AGUSTINO">EL AGUSTINO</option>
                                <option value="INDEPENDENCIA">INDEPENDENCIA</option>
                            </select>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-4">
                            <label className="form-label">Estado Civil</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccionar</option>
                                <option value="1">Soltero(a)</option>
                                <option value="2">Casado(a)</option>
                            </select>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" />
                            <label class="form-check-label">
                                Aceptar términos y condiciones
                            </label>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="d-grid col-6 gap-2 mx-auto">
                            <button class="btn btn-success" type="submit">ENVIAR</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
