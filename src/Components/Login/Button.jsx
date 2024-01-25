const Button = ({hidden}) => {
    return ( 
        <div hidden={hidden==1}>
            <button type="radio" id="Excellent">Excellent</button>
            <button type="radio" id="Very Good">Very Good</button>
            <button type="radio" id="Good">Good</button>
            <button type="radio" id="Satisfactory">Satisfactory</button>
            <button type="radio" id="Bad">Bad</button>
        </div>
     );
}
 
export default Button;