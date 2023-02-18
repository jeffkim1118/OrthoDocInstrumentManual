import React from 'react';
import ModalP from '../ModalPopup/ModalP';

import aligner1 from '../images/alignerBanding/noButton/IMG-4374.jpg';
import aligner2 from '../images/alignerBanding/noButton/IMG-4382.jpg';

export default function NoBtnAlginerBand(){
    const aligner = [aligner1,aligner2]
    return(
        <div>
            <h1>Aligner Banding</h1>
            {aligner.map((v, indx) => (
                <ModalP v={v} key={indx}/>     
            ))}
        </div>   
    )
}