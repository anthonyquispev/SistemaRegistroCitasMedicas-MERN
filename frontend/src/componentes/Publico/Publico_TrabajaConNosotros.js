import React, { Component } from 'react'
import LogoPoliclinico from '../img_/logo_team.png'
import { Link } from 'react-router-dom'
export default class Publico_TrabajaConNosotros extends Component {
    render() {
        return (
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-4">
                    <div className="row">
                        <div className="col-3">
                            <img src={LogoPoliclinico} width="40px" height="40px" alt="" />
                        </div>
                        <div className="col-3">
                            <div className="row text-dark fs-5">
                                Policlínico
                            </div>
                            <div className="row text-dark fs-5">
                                La Merced
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2 my-auto">
                        <Link className="nav-link text-black" to="#"><h6>Trabaja con Nosotros</h6></Link>
                    </div>
                    <div className="col-md-2 my-auto">
                        <Link className="nav-link text-black" to="#"><h6>Términos y Condiciones</h6></Link>
                    </div>
                    <div className="col-md-2 my-auto">
                        <Link className="nav-link text-black" to="#"><h6>Política de Privacidad</h6></Link>
                    </div>
                    <div className="col-md-2 my-auto">
                        <Link className="nav-link text-black" to="#"><h6>Libro de Reclamaciones</h6></Link>
                    </div>
                </div>
            </div>
        )
    }
}
