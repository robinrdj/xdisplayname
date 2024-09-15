import './App.css';
import {useState} from "react";

function App() {
  const [names, setName] = useState({
    fname:"",
    lname:""
  });
  const [fullName, setFullName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setFullName(names.fname+" "+names.lname);
  }
  function handleFirstNameChange(e){
     setName((prev)=>({...prev,fname:e.target.value}));
     setFullName("");
  }
  function handleLastNameChange(e){
    setName((prev)=>({...prev,lname:e.target.value}));
    setFullName("");
 }
  return (
    <div className="App">
       <h1>Full Name Display</h1>
       <form onSubmit={handleSubmit}>
        <div>
        <label>First Name:</label>
        <input type="text" onChange={handleFirstNameChange} value ={names.fname} name="fname" required/>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" onChange={handleLastNameChange} value={names.lname} name="lname"required/>
        </div>
       <button type='submit'>Submit</button>
       </form>
       {fullName?<p>Full Name: {fullName}</p>:""}
    </div>
  );
}

export default App;
