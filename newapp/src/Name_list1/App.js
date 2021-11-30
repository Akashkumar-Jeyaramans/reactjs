import { useState} from 'react';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
function App() {

let [userDetail, setUserDetail] = useState([])
 const getName=(firstname,lastname)=>{
  console.log(firstname+lastname)
  setUserDetail([...userDetail,{firstname,lastname}])
  //userDetail.push({firstname,lastname})
 }



  return (
   
    <>
    <div className="body">
      <h1 className="name">Name List</h1>
    <Component1 getName={getName}  />
    <Component2 userDetail={userDetail}/>
    </div>
    </>
  );
}

export default App;
