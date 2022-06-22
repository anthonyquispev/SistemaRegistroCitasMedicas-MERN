import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoPoliclinico from '../img_/logo_team.png'

function Publico_Navigation() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    if (isLoading)
        return  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading ...</span>
                    </div>
                </div>
                
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <div className="row py-1">
                        <div className="col my-auto">
                            <img
                                src={LogoPoliclinico}
                                width="60px"
                                height="64px"
                                alt=""
                                style={{ filter: "sepia(35%) invert(91%) brightness(1.8) " }}
                            />
                        </div>
                        <div className="col" style={{ color: "#5a9eff" }}>
                            <div className="row h5 m-0">
                                Policlínico
                            </div>
                            <div className="row h4 m-0">
                                La Merced
                            </div>
                        </div>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse d-flex" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publico_Especialidades">Especialidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publico_StaffMedico">Staff Médico</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/publico_Ubicanos">Ubícanos</Link>
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <div>
                                        <Link className="nav-link" to={"/usuario_ReservarCita/" + user.email}>RESERVA TU CITA</Link>
                                    </div>
                                    :
                                    <div>
                                        <Link className="nav-link" to="/usuario_ReservarCita">RESERVA TU CITA</Link>
                                    </div>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <div>
                                        <Link className="nav-link" to={"/usuario_MisCitas/" + user.email}>Mis citas</Link>
                                    </div>
                                    :
                                    <div>
                                    </div>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <div>
                                        <Link className="nav-link" to="/usuario_CerrarSesion">CERRAR SESIÓN</Link>
                                    </div>
                                    :
                                    <div>
                                        <Link className="nav-link" to="/publico_IniciarSesion">Iniciar Sesión/Crear Cuenta</Link>
                                    </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Publico_Navigation;