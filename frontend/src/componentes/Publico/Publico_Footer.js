import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Publico_Footer extends Component {
    render() {
        return (
            <footer className="mt-auto bg-dark text-center text-white">
                <div className="container-fluid p-0 pt-4">
                    <section>
                        <div className="row container-fluid py-4">
                            <div className="col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <Link className="nav-link text-white" to="#">Quiénes Somos</Link>
                                    <Link className="nav-link text-white" to="#">Acreditaciones</Link>
                                    <Link className="nav-link text-white" to="#">Convenios de salud</Link>
                                    <Link className="nav-link text-white" to="#">Especialidades</Link>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <Link className="nav-link text-white" to="#">Sedes</Link>
                                    <Link className="nav-link text-white" to="#">Vida saludable</Link>
                                    <Link className="nav-link text-white" to="#">Resultados de Laboratorio</Link>
                                    <Link className="nav-link text-white" to="#">Directorio Médico</Link>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <Link className="nav-link text-white" to="#">Flujo de Reclamaciones</Link>
                                    <Link className="nav-link text-white" to="#">Comprobante Electrónico</Link>
                                    <Link className="nav-link text-white" to="#">Condiciones de uso Médico Virtual</Link>
                                    <Link className="nav-link text-white" to="#">Reservar Cita</Link>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled mb-0">
                                    <Link className="nav-link text-white" to="#">Consultorio Virtual</Link>
                                    <Link className="nav-link text-white" to="#">Pruebas Covid</Link>
                                    <Link className="nav-link text-white" to="#">Campañas Comerciales</Link>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="text-center py-3" id="Copy">
                        Copyright © Policlínico La Merced - 2021. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        )
    }
}
