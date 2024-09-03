import './App.css';
import {useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isVisible,setIsVisible] = useState(false);
  const [fullName, setFullName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setFullName(`Full Name:${firstName} ${lastName}`);
    setIsVisible(true);
    setFirstName("");
    setLastName("");
  }
  function handleFirstNameChange(e){
     setFirstName(e.target.value);
     setIsVisible(false);
     setFullName("");
  }
  function handleLastNameChange(e){
    setLastName(e.target.value);
    setIsVisible(false);
    setFullName("");
 }
  return (
    <div className="App">
       <h3>Full Name Display</h3>
       <form onSubmit={handleSubmit}>
        <div>
        <label>First Name:</label>
        <input type="text" onChange={handleFirstNameChange} value ={firstName} required/>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" onChange={handleLastNameChange} value={lastName} required/>
        </div>
       <button type='submit'>Submit</button>
       </form>

       <p>{isVisible &&  fullName}</p>
    </div>
  );
}

export default App;
