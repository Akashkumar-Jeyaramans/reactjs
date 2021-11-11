import React from 'react'
import DoList from './DoList';
import DoneList from './DoneList';


let dodata=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
{
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },]
class MyTodo extends React.Component
{ constructor(props)
    {
        super(props)
    this.state={
        dodata:dodata
    }
    }
getDoitem=()=> this.state.dodata.filter((data)=>data.completed===false) //inline function
getDoneItem=()=>this.state.dodata.filter((data)=>data.completed===true) //inline function


toggleTodoCompleted=(todoId)=>{
  const tempTodo =[...this.state.dodata];  //creating a temp array & i am the copying it 
  const todo=tempTodo.find((todo)=>todo.id===todoId)
  todo.completed=!todo.completed;
  this.setState({todata:tempTodo})
  
}

deleteTodo=(todoId)=>{
  const tempTodo =[...this.state.dodata];  //creating a temp array & i am the copying it 
  const todo=tempTodo.find((todo)=>todo.id===todoId)
  todo.deleted=true;
  this.setState({todata:tempTodo})
  
}
    render()
    {
        return(
         <>
           <div className="container">
           <center> <h1>MY TODO LIST</h1></center>
           <div className="row">
            <div className="col-md-6">
            <DoList toggleTodoCompleted={this.toggleTodoCompleted} deleteTodo={this.deleteTodo} doitem={this.getDoitem()}></DoList>
            </div>
            <div className="col-md-6">
            <DoneList deleteTodo={this.deleteTodo} doneitem= {this.getDoneItem()}></DoneList>
            </div>
            </div>
            </div>
        </>

        );
    }
}

export default MyTodo;