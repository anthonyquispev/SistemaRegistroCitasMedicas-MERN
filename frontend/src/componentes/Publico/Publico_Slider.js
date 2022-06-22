import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img_slider_02 from '../img_/img_slider_02_02.jpg'
import img_slider_03 from '../img_/img_slider_03_02.jpg'

export default class Publico_Slider extends Component {
    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            //src={img_slider_01}
                            //-----------------------Nueva imagen----------------------------
                            src="https://www.eurofinsa.com/sites/default2/files/styles/test/public/ibtgroup-Peru-Hospital-and-Polyclinic-Guillermo-Kaelin-De-La-Fuente-03_0.jpg?itok=s3WAazob"
                            alt="First slide"
                            height="550px"
                            style={{ objectFit: "cover", filter: "brightness(60%)", opacity: ".8" }}
                        />
                        <Carousel.Caption>
                            <div className="row text-ligth">
                                <div className="col-md-5 mb-5">
                                    <h1><b>¡Conoce nuestros protocolos de bioseguridad!</b></h1>
                                    <p className="text-ligth">Tu salud y la de tu familia es nuestra prioridad.</p>
                                    <button className="btn btn-primary">
                                        LEER MÁS
                                    </button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img_slider_02}
                            alt="Second slide"
                            style={{ objectFit: "cover", filter: "brightness(90%)" }}
                            height="550px"
                        />
                        <Carousel.Caption>
                            <div className="row text-primary">
                                <div className="col-md-5 mb-5">
                                    <h1><b>Recuerda usar doble mascarilla</b></h1>
                                    <p className="text-dark">al acudir a tus citas en sede.</p>
                                    <button className="btn btn-dark">
                                        LEER MÁS
                                    </button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img_slider_03}
                            alt="Third slide"
                            style={{ objectFit: "cover" }}
                            height="550px"
                        />
                        <Carousel.Caption>
                            <div className="row text-primary">
                                <div className="col-md-5 mb-5">
                                    <h1><b>Conoce a nuestros héroes</b></h1>
                                    <p className="text-dark">Los mejores médicos a tu servicio</p>
                                    <button className="btn btn-dark">
                                        LEER MÁS
                                    </button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        )
    }
}