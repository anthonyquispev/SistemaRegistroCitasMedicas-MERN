import React, { Component } from 'react'
import Usuario_VerificarCorreo from './Usuario_VerificarCorreo'
import Usuario_Login from './Usuario_Login'
import axios from 'axios'
import Usuario_FormularioDatos from './Usuario_FormularioDatos'
import { withAuth0 } from '@auth0/auth0-react';
import Usuario_ReservarCita_Contenido from './Usuario_ReservarCita_Contenido'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

class Usuario_ReservarCita extends Component {
    // El usuario completó el formulario de datos personales?
    state = {
        formularioCompletado: false
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/usuarios/' + this.props.match.params.id);

            if (Object.entries(res.data).length === 0) {
                // No se encontró correo
                this.setState({ formularioCompletado: false });
            } else {
                // Se encontró correo
                this.setState({ formularioCompletado: true });
            }
        }
    }

    render() {
        const { user, isAuthenticated, isLoading } = this.props.auth0;
        if (isLoading)
            return  <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading ...</span>
                        </div>
                    </div>

        return (
            <div>
                {
                    isAuthenticated ?
                        user.email_verified ?
                            this.state.formularioCompletado ?
                                <Usuario_ReservarCita_Contenido
                                    correo={user.email}
                                />
                                : <Usuario_FormularioDatos />
                            : <Usuario_VerificarCorreo />
                        : <Usuario_Login />
                }
            </div>
        )
    }
}
export default withAuth0(Usuario_ReservarCita);