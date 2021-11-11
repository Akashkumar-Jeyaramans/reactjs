import React from "react";

class AppCs extends React.Component{
constructor(props){
    super(props);
    this.state={calc:"",result:"",ops : ['/', '*', '+', '-', '.']};
}
 updateCalc = value =>{
    if(
      ops.includes(value) && calc === ''||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }
   createDigits = ()=>{
    const digits = [];
    for (let i=1; i<10; i++){
      digits.push(
        <button onClick={()=> this.updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }
  calculate = ()=>{
    setCalc(eval(calc).toString());
  }
   deleteLast = ()=>{
    if(calc ==''){
      return;
    }
     value =calc.slice(-1);
    setCalc(value);
  }
    render(){
        return(
            <>
             <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span>:''}
          {calc || "0"}
        </div>
        <div className="operators">
            <button onClick={()=> this.updateCalc('/')}>/</button>
            <button onClick={()=> this.updateCalc('*')}>*</button>
            <button onClick={()=> this.updateCalc('+')}>+</button>
            <button onClick={()=> this.updateCalc('-')}>-</button>

            <button onClick={this.deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {this.createDigits()}
            <button onClick={()=> this.updateCalc('0')}>0</button>
            <button onClick={()=> this.updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
            </>
        );
    }
}
export default AppCs;