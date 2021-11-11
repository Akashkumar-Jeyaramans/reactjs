 import React from 'react';

function Displayfn(props) {
 let {result} = props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    
}


export default Displayfn;