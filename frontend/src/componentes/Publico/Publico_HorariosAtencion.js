import React, { Component } from 'react'

export default class Publico_HorariosAtencion extends Component {
    render() {
        return (
            <div>
                <div className="row bg-light p-0 m-0">
                    <div className="col-md-6 p-0">
                        <img
                            //-------------Nueva imagen---------------- 
                            src="https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2018/09/Vocabulario-en-ingl%C3%A9s-que-todo-m%C3%A9dico-debe-conocer.jpg"
                            alt="logo1"
                            className="img-fluid"
                            style={{ objectFit: "cover", height: "100%" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="row p-5 text-primary">
                            <div className="row">
                                <h2><b>¿Conoces nuestros</b></h2>
                            </div>
                            <div className="row">
                                <h2>horarios de atención?</h2>
                            </div>
                        </div>
                        <div className="row ps-5">
                            <div className="row pe-5">
                                <div className="py-2 border border-primary rounded-pill bg-dark">
                                    <span className="py-2 text-white">
                                        <b>1. Ambulatorio y Hospitalización</b>
                                    </span>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <span><h6 className="text-secondary">Lunes a Viernes de 08:00 a 21:00 hrs</h6></span>
                            </div>
                            <div className="row py-4">
                                <span><h6 className="text-secondary">Sábados de 08:00 a 17:00 hrs</h6></span>
                            </div>
                        </div>
                        <div className="row pb-5 pt-1 ps-4" >
                            <div className="col-6">
                                <div className="row modal-dialog modal-dialog-centered">
                                    <p>
                                        <h5>Es fácil cuidarte</h5>
                                        <h4><b>¡Visita a tu médico!</b></h4>
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 py-5">
                                <button className="btn btn-secondary">
                                    RESERVAR CITA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
