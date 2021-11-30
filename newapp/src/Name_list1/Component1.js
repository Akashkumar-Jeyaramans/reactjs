
import { useState} from 'react'; 
import './Component1.css';

function Component1(props) {

 
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [errmessage, setErrmessage] = useState('')
 const getName=(e)=>{
     e.preventDefault()
     if(firstname==="" || lastname===""){
        setErrmessage("User name cannot be empty")
        return
     }
    props.getName(firstname,lastname)
    setFirstname("")
    setLastname("")
    setErrmessage("")
 }

  return (
   
    <>
    <div>
    <p className="err">{errmessage}</p>
    </div>
    <form onSubmit={getName}>
    <label className="a">First Name</label>
    <input value={firstname} placeholder="First Name" onChange={e=>setFirstname(e.target.value)}/>
      
        <label className="a">Last Name</label>
    <input value={lastname} placeholder="Last Name" onChange={e=>setLastname(e.target.value)}/>
   
   <input className="submit" type="submit"/>
   </form>
    </>
  );
}

export default Component1;