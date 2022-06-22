import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Usuario_Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        [LOGO POLICLÍNICO]
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse d-flex" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/publico_IniciarSesion">INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario_MisCitas">MIS CITAS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario_ReservarCita">RESERVA TU CITA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario_CerrarSesion">CERRAR SESIÓN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
        )
    }
}

