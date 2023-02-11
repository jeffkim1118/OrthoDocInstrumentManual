import btnAligner1 from '../images/alignerBanding/button/IMG-4378.jpg';
import btnAligner2 from '../images/alignerBanding/button/IMG-4382.jpg';
import btnAligner3 from '../images/alignerBanding/button/IMG-4385.jpg';
import btnAligner4 from '../images/alignerBanding/button/IMG-4387.jpg';
import aligner1 from '../images/alignerBanding/noButton/IMG-4374.jpg';
import aligner2 from '../images/alignerBanding/noButton/IMG-4382.jpg';


export default function AlignerBand(){
    return (
        <div>
            <h2>Aligner Banding &#40;With Bracket &#41;</h2>
            <img src={btnAligner1} alt='btnAligner1'></img>
            <img src={btnAligner2} alt='btnAligner2'></img>
            <img src={btnAligner3} alt='btnAligner3'></img>
            <img src={btnAligner4} alt='btnAligner4'></img>

            <h2>Aligner Banding &#40;Without Bracket &#41;</h2>
            <img src={aligner1} alt='aligner1'></img>
            <img src={aligner2} alt='aligner2'></img>
        </div>
    )
}