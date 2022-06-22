import React, { Component } from 'react'
import logo from '../img_/img_newspaper.svg'

export default class Publico_Suscribete extends Component {
    render() {
        return (
            <section style={{ background: "#2A9EF6" }}>
                <form>
                    <div className="row container-fluid py-3 d-flex justify-content-center">
                        <div className="col-auto">
                            {/* Ícono */}
                            <div className="d-flex py-2">
                                <img className="my-auto"
                                    src={logo}
                                    alt=""
                                    width="60px"
                                    height="60px"
                                    style={{ filter: "invert(0.97)" }}
                                />
                                <p className="ps-4 pt-2">
                                    <h3 className="text-light"><b>Suscríbete</b></h3>
                                    <h5 className="text-light">Entérate de nuestras novedades</h5>
                                </p>
                            </div>
                        </div>
                        <div className="col-auto my-auto pb-2">
                            <div className="input-group">
                                <input type="email" className="form-control rounded-pill" placeholder="Correo Electrónico" />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn ms-2 btn-primary mr-4 rounded-pill"> <b>Enviar</b> </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}
