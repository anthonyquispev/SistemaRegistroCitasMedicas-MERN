import React, { Component } from 'react'

export default class Publico_Ubicanos extends Component {
    render() {
        return (
            <div className="container-fluid row pt-4">
                <div className="col-md-5 d-flex mb-4">
                    <div className="my-auto row ps-5">
                        <div className="mb-3 col-6 col-md-12">
                            <h5 className="m-0 text-danger">Ubícanos</h5>
                            <span className="ps-3">Carmen de la Legua</span>
                        </div>
                        <div className="mb-3 col-6 col-md-12">
                            <h5 className="m-0 text-danger">Teléfono</h5>
                            <span className="ps-3">4651778</span>
                        </div>
                        <div className="mb-3 col-6 col-md-12">
                            <h5 className="m-0 text-danger">Email</h5>
                            <span className="ps-3">info@lamerced.com</span>
                        </div>
                        <div className="col-6 col-md-12">
                            <h5 className="m-0 text-danger">Horario de Atención</h5>
                            <span className="ps-3">Lunes a viernes: 9 am a 6 pm</span>
                        </div>
                    </div>
                </div>
                <iframe className="col-md-7 m-auto pe-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.7512959254046!2d-77.09864284701226!3d-12.04280699497263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10f72391911a92ff!2sPoliclinico%20La%20Merced!5e0!3m2!1ses-419!2spe!4v1630545869509!5m2!1ses-419!2spe" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
        )
    }
}
