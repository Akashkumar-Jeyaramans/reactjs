import './Component2.css';
function Component2(props) {

 


  return (
   
    <>
  
       <table>
           <thead>
  <tr>
    <th>S.no</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Full Name</th>
  </tr>
</thead>
<tbody>
    {
        
        props.userDetail.map((user,index)=>{
           // return <li key ={user.firstname+index+user.lastname}>{user.firstname} {user.lastname}</li>
       
  return <tr key ={user.firstname+index+user.lastname} >
    <td>{index+1}</td>
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.firstname} {user.lastname}</td>
  </tr>
  

        })

    }
    </tbody>
    </table>
    </>
  );
}

export default Component2;