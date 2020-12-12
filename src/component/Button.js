import React from 'react';


import './Button.css'

function Button (props){
    let typeboutton=props.typeBT;
    console.log(typeboutton);
    
    if (typeboutton==='operateur')  
    {
        return(   
            <span className="operateurKeys">
                <button className="operateur Keybord" id="clear">C</button>
                <button className="operateur Keybord" id="retour">CE</button>
                <button className="operateur Keybord" id="%">%</button>
                <button className="operateur Keybord" id="/">&#247;</button>
                <button className="operateur Keybord" id="*">&times;</button>
                <button className="operateur Keybord" id="-">-</button>
                <button className="operateur Keybord" id="+">+</button>
                <button className="operateur Keybord" id="=">=</button>
            </span> 
         )      
    }  
    else{
        return(  
             <span className="nombreKeys">
                <button className="nombre Keybord" id="1">1</button>
               <button className="nombre Keybord" id="2">2</button>
                <button className="nombre Keybord" id="3">3</button>
                <button className="nombre Keybord" id="4">4</button>
                <button className="nombre Keybord" id="5">5</button>
                <button className="nombre Keybord" id="6">6</button>
                <button className="nombre Keybord" id="7">7</button>
                <button className="nombre Keybord" id="8">8</button>
                <button className="nombre Keybord" id="9">9</button>
                <button className="nombre Keybord" id="0">0</button>
                <button className="nombre Keybord" id=".">.</button>
                
            </span> 
         )      
    }
    
    
        
    
}

export default Button;