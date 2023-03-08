import React from 'react';
import ModalP from '../ModalPopup/ModalP';
import btnAligner1 from '../images/alignerBanding/button/IMG-4378.jpg';
import btnAligner2 from '../images/alignerBanding/button/IMG-4382.jpg';
import btnAligner3 from '../images/alignerBanding/button/IMG-4385.jpg';
import btnAligner4 from '../images/alignerBanding/button/IMG-4387.jpg';

export default function BtnAlignerBand(){
    const btnAligners = [btnAligner1,btnAligner2,btnAligner3,btnAligner4];
    return(
        <div style={{display:'flex'}}>
            <h1>Aligner Banding &#40;with buttons&#41;</h1>
            {btnAligners.map((v, indx) => (
                <ModalP v={v} key={indx}/>
            ))}
        </div>
    )
}