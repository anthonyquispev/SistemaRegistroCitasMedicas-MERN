import React, { Component } from 'react'
import Usuario_Login from './Usuario_Login'
import Usuario_VerificarCorreo from './Usuario_VerificarCorreo'
import Usuario_FormularioDatos from './Usuario_FormularioDatos'
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';

class Usuario_MisCitas extends Component {
    
    state = {
        isFormularioCompletado: false,
        user: [],
        citas: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/usuarios/' + this.props.match.params.id);
        this.setState({ user: res.data[0] })
        if (Object.entries(res.data).length === 0) {
            // No encontró correo
            this.setState({ isFormularioCompletado: false });
        } else {
            // Se encontró correo
            this.setState({ isFormularioCompletado: true });
        }
        // Lectura de citas
        const res2 = await axios.get('http://localhost:4000/api/citas/' + this.props.match.params.id);
        this.setState({ citas: res2.data })
    }

    render() {
        const { user, isAuthenticated, isLoading } = this.props.auth0;
        if (isLoading) return <h1>Loading...</h1>

        return (
            <div>
                {
                    isAuthenticated ?
                        user.email_verified ?
                            this.state.isFormularioCompletado ?
                                //*****************CONTENIDO MIS CITAS - LECTURA DE BASE DE DATOS*****************
                                <div className="container py-5">
                                    <div className="row pt-2 pb-5">
                                        <h3><b>Paciente: </b> </h3>
                                        <h5 className="text-secondary">{this.state.user.apellidos + ", " + this.state.user.nombres}</h5>
                                    </div>
                                    <div className="row">
                                        <table className="table">
                                            <thead className="table-info">
                                                <tr>
                                                    <th scope="col">Médico</th>
                                                    <th scope="col">Especialidad</th>
                                                    <th scope="col">Fecha</th>
                                                    <th scope="col">Hora</th>
                                                    <th scope="col">Atendido</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.citas.map(c => (
                                                        <tr>
                                                            <th scope="row">{c.medico}</th>
                                                            <td scope="row">{c.especialidad}</td>
                                                            <td scope="row">{c.fecha.day + "/" + c.fecha.month + "/" + c.fecha.year}</td>
                                                            <td scope="row">{c.hora}</td>
                                                            <td scope="row">{(c.atendido === "true") ? "Sí" : "No"}</td>
                                                        </tr>
                                                    )
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                : <Usuario_FormularioDatos />
                            : <Usuario_VerificarCorreo />
                        : <Usuario_Login />
                }
            </div>
        )
    }
}
export default withAuth0(Usuario_MisCitas);