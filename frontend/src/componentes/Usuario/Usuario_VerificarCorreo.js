import React, { Component } from 'react'

export default class Usuario_VerificarCorreo extends Component {
    render() {
        return (
            <div className="container p-5">
                <div className="row bg-danger rounded-top p-2">
                    <h2 className="text-center border border-warning rounded-pill p-3 text-warning bg-dark">Verifique su correo electrónico</h2>
                </div>
                <div className="row bg-danger">
                    <p className="p-5 fs-4 text-white">Al verificar su correo electrónico, podrá acceder a las funciones de reserva de citas. Ingrese a su correo electrónico para realizar la verificación.</p>
                </div>

            </div>
        )
    }
}
