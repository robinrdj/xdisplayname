import './App.css';
import {useState} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isVisible,setIsVisible] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setIsVisible(true);
  }
  function handleFirstNameChange(e){
     setFirstName(e.target.value);
     setIsVisible(false);
  }
  function handleLastNameChange(e){
    setLastName(e.target.value);
    setIsVisible(false);
 }
  return (
    <div className="App">
       <h3>Full Name Display</h3>
       <form onSubmit={handleSubmit}>
        <div>
        <label>First Name:</label>
        <input type="text" onChange={handleFirstNameChange} required/>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" onChange={handleLastNameChange} required/>
        </div>
       <button type='submit'>Submit</button>
       </form>

       <p>{isVisible &&  `Name:${firstName} ${lastName}`}</p>
    </div>
  );
}

export default App;
