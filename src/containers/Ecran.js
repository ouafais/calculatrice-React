import React, { Component } from 'react';
import Afficheur from '../component/Afficheur';

import './Ecran.css';
import '../component/Afficheur.css'

class Ecran extends Component{
    render(){
        return (
            <div className="ecran">
                <Afficheur typeAfficheur="historique" />
                <Afficheur typeAfficheur="resultat" />
            </div>
        )
    }
}

export default Ecran;

