import React, { useState } from "react";
import './BmiApp.css';
export default function BmiApp(){
    let[Height, setHeight] = useState(0);
    const[Weight, setWeight] = useState(0);
    const[Bmi, setBmi] = useState(0);
    const[Feet, setFeet] = useState('');
    const[Inch, setInch] = useState('');
    var imageUrl = "";
    const calculate = (e) => {

        e.preventDefault();
        
        let h1 = Feet*12;
        console.log('h1'+h1)
        let h2 = parseInt(Inch) +parseInt (h1);
        console.log('h2'+h2)
         Height = h2*0.0254;
         console.log('height'+Height)
        const formValid = +Height > 0 && +Weight > 0;
        if (!formValid) {
          return;
        }
        const bmi = +Weight / (+Height) ** 2;
        
        if(bmi > 30){
           
            setBmi(bmi + " you are obessed");
           imageUrl="https://images.pexels.com/photos/6669476/pexels-photo-6669476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }
        else if(bmi <18.5){
          setBmi(bmi + " you are under weighted");
            imageUrl="https://images.pexels.com/photos/1528375/pexels-photo-1528375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }
        else if(bmi < 25 && bmi >18.5){
           setBmi(bmi + " you are fit");
            imageUrl="https://images.pexels.com/photos/2083500/pexels-photo-2083500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }
        else if(bmi < 30 && bmi >25){
           setBmi(bmi + " you are over weighted");
            imageUrl="https://images.pexels.com/photos/7065295/pexels-photo-7065295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }
      };






    return(
        <>
        <h1>BMI Calculator</h1>
        <div className="full-body">
       <form onSubmit={calculate}>
  <label>
    Height:
    <input type="name" value={Feet} onChange={(e) => setFeet(e.target.value)} name="name" />feet <input type="text" onChange={(e) => setInch(e.target.value)} value={Inch} name="name" />inches
  </label>
  <br></br>
  <br></br>
  <label>
    Weight:
    <input  value={Weight} name="name" onChange={(e) => setWeight(e.target.value)} />Kgs
  </label>
  <br></br>
  <br></br>
  <button type="submit">calculate</button>
</form>
<p>bmi: {Bmi}</p>
<img className="image" alt="hi" src={imageUrl}/> 
</div>

        </>
    );
}