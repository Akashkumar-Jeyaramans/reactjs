import React from 'react';
	
	class DoneList extends React.Component
	{
	    constructor(props)
	{
	    super(props)
	}
	render()
	{
	    //console.log(this.doneItem)
	    return(
	       
	        <>
	        <h3>Donelist</h3>
	         {

				  this.props.doneitem.map((doneItem)=>(
	                <div className="container">
	                   <div className="card-mb-2">
	                        <div className="card-body">
	                         <p className="card-text">{doneItem.title} </p>
	                        <button className="btn btn-primary">Undo</button>
	                         <button onClick={()=>this.props.deleteTodo(doneItem.id)}className="btn btn-danger" >delete</button>
	                        
	                       </div>
	                     </div>
	                     </div>
	             ))
				}
	         
	        </>
	    );
	}
	}
    export default DoneList;