import React,{useState} from 'react'

function SignIn(){
    const [email, setEmail] = useState()
    const[password,setPassword] = useState()


return(
    <>
    <div>
        <h1>login</h1>
        <form>
            <div>
                <label>email : <input type="text"></input></label>
                
                <label>password : <input type="type"></input></label>
                
            </div>
        </form>
    </div>
    </>
)

}

export default SignIn;

