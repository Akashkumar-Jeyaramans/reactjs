import React from 'react';
import Aapp from './Aapp';
function Ak(){
    var a = "Akash";
    return(
        <>
        <div>
        <h1>Login page</h1>
        <label>User ID</label>
        <Aapp title="Akash"></Aapp>
        <label>Password</label>
          <Aapp count={a} ></Aapp> 
        <button>Submit</button>
        </div>
        </>
    );
}
export default Ak;