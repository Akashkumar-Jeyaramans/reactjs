import React from 'react';
	
	class DoList extends React.Component
	{
	    constructor(props)
	{
	    super(props)
	}
	render()
	{
	    console.log(this.props.doitem)
	    return(
	        <>
	        <h3>Dolist</h3>
	         {
	            this.props.doitem.map((doItem)=>
	            {return(
	                <>
	                {
					// doItem.deleted==false?(
	                    <div className="container">
	                   		<div className="card-mb-2">
	                        <div className="card-body">
	                         <p className="card-text">{doItem.title} </p>
	                        <button onClick={()=>this.props.toggleTodoCompleted(doItem.id)} className="btn btn-primary">done</button>
	                         <button onClick={()=>this.props.deleteTodo(doItem .id)} className="btn btn-danger">delete</button>
	                    </div>
	                     </div>
	                     </div>
					//	 ):(<></>)
	             }
	            </>);}
				)
	}
	</>);
	}
	}
    export default DoList;