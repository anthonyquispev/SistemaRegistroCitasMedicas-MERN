import React, { Component } from 'react'

export default class Publico_Servicios extends Component {
    render() {
        return (
            <div className="row container-fluid m-auto p-0">
                {/* Columna izquierda */}
                <div className="col-lg-6 px-5 pt-5 pb-4 m-auto ">
                    <div className="row pb-3 pt-3 ps-3">
                        <h3 className="pb-5">
                            <b className="text-primary">Conoce nuestros servicios:</b>
                        </h3>
                    </div>
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/clinica-internacional-icono-dental-celeste.png" />
                                <h6 className="px-4 py-2 ">Sonrisa Total</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-rayos-x-celeste.png" />
                                <h6 className="px-4 py-2">Rayos X</h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-ecografia-celeste.png" />
                                <h6 className="px-4 py-2">Ecografía</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-medicina-preventiva-doctor-celeste.png" />
                                <h6 className="px-4 py-2">Medicina Preventiva</h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/clinica-internacional-icono-tomografia-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Farmacia</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-laboratorio-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Laboratorio</h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-mamografia-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Mamografía</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-hospitalizacion-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Hospitalización</h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-cuidados-intensivos-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Unidad de Cuidados Intensivos (U.C.I)</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-neonatologia-ginecologia-celeste.png" alt="logo2" />
                                <h6 className="px-4 py-2">Ginecología y Neonatología</h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row container py-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-nutricion-celeste.png" />
                                <h6 className="px-4 py-2">Nutrición</h6>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <img src="https://www.clinicainternacional.com.pe/uploads/servicios/sedes-servicios/clinica-internacional-icono-laboratorio-celeste.png" className="img-fluid" />
                                <h6 className="px-4 py-2">Laboratorio Clínico</h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha */}
                <div className="col-lg-6 p-0">
                    <img
                        src="https://www.clinicainternacional.com.pe/uploads/img-servicios.png"
                        className="img-fluid"
                        style={{ objectFit: "cover", height: "100%" }}
                    />
                </div>
            </div>
        )
    }
}
