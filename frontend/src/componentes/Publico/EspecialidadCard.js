import React, { Component } from 'react'

export default class EspecialidadCard extends Component {
    imgStyle = {
        objectFit: 'cover',
        minHeight: "100%" ,
        width: "100%"
    };

    render() {
        return (
            <div className="col-lg-6 border">
                <div className="row">
                    <div className="col-6 p-0">
                        <img style={this.imgStyle} src={this.props.img} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="card-body m-auto">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <button className="btn btn-secondary">Ver Especialistas</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
