import {MdClose} from "react-icons/md"
import './App.css';
import { useState } from "react";

function App() {

const [addSection,setAddSection] = useState(false)



const handleSubmit = (e)=>{
  e.preventDefault()
}

  return (
    <>
    <div className="container">
      <button className="btn btn-add">Add +</button>

    {
      addSection && (
        <div className="addContainer">

        <form onSubmit={handleSubmit}>
        <div className="close-btn"><MdClose/></div>

          <label htmlFor="name">Name :</label>
          <input type="name" id="name" name="name" />
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="number">Mobile :</label>
          <input type="number" id="mobile" name="mobile" />
          <button className="btn">Submit</button>
        </form>
      </div>
      )
    }

      
    </div>
    </>
  );
}

export default App;
