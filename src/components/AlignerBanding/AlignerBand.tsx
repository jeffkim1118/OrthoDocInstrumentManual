import React from 'react';
import NoBtnAlginerBand from './NoBtnAlignerBand';
import BtnAlignerBand from './BtnAlignerBand';

export default function AlignerBand(){
    
    return (
        <div id='kit-container'>
        <div id='kit' style={{display:"flex", flexDirection:"column"}}>
            <NoBtnAlginerBand />
            <BtnAlignerBand />
        </div>
        </div>  
    )
}