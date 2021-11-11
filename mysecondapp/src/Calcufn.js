import React, { useState } from 'react';
import './Calcu.css';
import Displayfn from './Displayfn';
import Keyboardfn from './Keyboardfn'; 


function Calcufn(props){
    const [result,setResult] = useState("");
   const onClick = button => {
        if(button === "="){
           calculate()
       }
        else if(button === "C"){
           reset()
       }
       else if(button === "CE"){
           backspace()
       }
         else {
           setResult(
               result + button
           )
       }
   };

   const  calculate = () => {
    try {
        setResult(
            
            (eval(result) || "" ) + ""
        )
    } catch (e) {
        setResult(
             "error"
        )
       }
};

const reset = () => {
    setResult(
         ""
    )
};

const backspace = () => {
    setResult(
         result.slice(0, -1)
    )
};
    return(
        <>
        <div>
                <div className="calculator-body">
                    <h1>Akash's Calculator</h1>
                    <Displayfn result={result}/>
                    <Keyboardfn onClick={onClick}/>
                </div>
            </div>
        </>
    )
}



export default Calcufn;