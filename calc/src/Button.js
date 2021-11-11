import React from 'react';
import './Button.css';
import Display from './Display';
class Button extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            
           <div className="container">
           <Display></Display>
               <div className="row">
                   <div className="col-md-4">
                   <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-4">
                   <button>4</button>
                    <button>5</button>
                    <button>6</button>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-4">
                   <button>1</button>
                    <button>2</button>   
                    <button>3</button>
                   </div>
               </div>
                <div className="row">
                    <div className="col-6">
                    <button>0</button>
                    <button >.</button>
                    </div>
                    
                </div>

                
           </div>
       
        
        
        
        
</>
        );
    }
}
export default Button; 