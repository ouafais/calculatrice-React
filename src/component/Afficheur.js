import React from 'react';

import './Afficheur.css'

function Afficheur(props){
    let typeAfficheur= props.typeAfficheur;
    // we have 2 types of afficheur one displays the history of inputs and the other displays the input or result if we click on =
    if ( typeAfficheur ==="historique"){
        return (
            // this is displaying the history of inputs
            <div  className="Memory">            
                <p  >ceci est un Afficheur historique</p>
            </div>
        )
    }
    else if (typeAfficheur ==="resultat")
    {
        //and this is displaying the present input or the result
        return (
            <div  className="Saisie">            
                <p  >ceci est un Afficheur saisie</p>
            </div>
        )
    }
     
}

export default Afficheur;