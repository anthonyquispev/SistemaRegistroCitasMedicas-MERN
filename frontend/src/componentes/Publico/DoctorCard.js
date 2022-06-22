import React, { Component } from 'react'

export default class DoctorCard extends Component {
    imgStyle = {
        objectFit: 'cover',
        height: "230px"
    };

    render() {
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3 p-4 ">
                <div className=" border rounded h-100">
                    <div className="pt-4 px-4 m-auto">
                        <img style={this.imgStyle} src={this.props.img} className="card-img-top img-fluid" alt="..." />
                    </div>
                    <div className="card-body py-4">
                        <h5 className="card-title text-center">{this.props.name}</h5>
                        <p className="card-text text-center">{this.props.specialty}</p>
                    </div>
                </div>
            </div>
        )
    }
}