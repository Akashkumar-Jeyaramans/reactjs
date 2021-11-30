import React from 'react';

function Aapp(props){
    const handleSubmit=(event)=>{
        event.preventDefault();
       
    }
    return(
        <>
        <div>
        <form onSubmit={this.handleSubmit}>
        
        <label>First Name</label>
        <input title ="firstname"/>
        <label>Last Name</label>
        <input />
        <input type="submit" value="Submit" />
        </form>
         
        
        </div>
        </>
    );
    }
export default Aapp;