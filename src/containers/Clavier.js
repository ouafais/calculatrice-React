import React, { Component } from "react";

import Button from '../component/Button';

import './Clavier.css';

class Clavier extends Component{

    render(){
        return (
            <div className="clavier">
                <Button typeBT="operateur"/>                
                <Button typeBT="nombre"/>               

            </div>
        )
    }
}

export default Clavier;