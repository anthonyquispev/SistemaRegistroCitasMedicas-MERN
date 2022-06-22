import React, { Component } from 'react'
import ReactPlayer from 'react-player';

export default class Publico_Video extends Component {
    render() {
        return (
            <div>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=RAM6_q3otMM'
                    className='react-player'
                    playing="true"
                    loop="true"
                    volume="0.03"
                    width='100%'
                    height='650px' />
            </div>
        )
    }
}
