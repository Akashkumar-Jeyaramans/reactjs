import React from 'react'; 
import Villain from './Villain';
import axios from 'axios';
class Hero extends React.Component
{
    componentDidMount() {
        const url="https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query=office";
        axios.get(url)
        .then((res)=>{})
        .catch((err)=>{})

        
      }
    constructor(props){
        super(props);
        this.state={count:0};
    }
    counterevent=(action)=>
	        {
	            if(action==="pluss")
	            {
	                this.setState({count:this.state.count+1});
	            }
	            else if(action==="minus")
	            {
                    if(this.state.count>0)
	                this.setState({count:this.state.count-1});
	            }
	            else if(action==="reset")
	            {
	                this.setState({count:this.state.count=0})
	            }
	        }
    // pluss=()=>{
    //     this.setState({count:this.state.count+1});
    //     console.log("hi");
    // }
    // minuss=()=>{
    //     this.setState({count:this.state.count-1});
    //     console.log("bye");
    // }
    // reset=()=>{
    //     this.setState({count:this.state.count=0});
    //     console.log("bye");
    // }
render(){
    return(
        <>
        {/* <button onClick={this.pluss}>+</button>
        <Villain count={this.state.count}></Villain>
        <button onClick={this.minuss}>+</button>
        <button onClick={this.reset}>Reset</button>
        */
        <button onClick={()=>this.counterevent("pluss")}>+</button> }
        <Villain count={this.state.count}></Villain>
        <button onClick={()=>this.counterevent("minus")}>-</button>
	    <button onClick={()=>this.counterevent("reset")}>reset</button>
        
        </>
        
    );
}
}

export default Hero;