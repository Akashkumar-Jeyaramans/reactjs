import React,{useState} from 'react'; 
import Villain from './Villain';
import axios from 'axios';

function Herofn()
{
var [count,setCount] = useState(0);
const counterevent=(action)=>
	        {
	            if(action==="pluss")
	            {
                    setCount(count+1);
	            }
	            else if(action==="minus")
	            {
                    if(count>0)
                    setCount(count-1);
	            }
	            else if(action==="reset")
	            {
                    setCount(count=0)
	            }
	        }


    return(
        <>
       
            <button onClick={()=>counterevent("pluss")}>+</button> 
            <Villain count={count}></Villain>
            <button onClick={()=>counterevent("minus")}>-</button>
            <button onClick={()=>counterevent("reset")}>reset</button>
             
   
        </>
    )
}

export default Herofn;