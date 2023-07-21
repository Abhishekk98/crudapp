import {MdClose} from "react-icons/md"
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'


axios.defaults.baseURL = "http://localhost:8080/"

function App() {

const [addSection,setAddSection] = useState(false)
const [formData,setFormData] = useState({
  name : "",
  email : "",
  mobile : "",
})

const [dataList,setDataList] = useState([])

const handleOnChange = (e)=>{
  const {value,name} = e.target
   setFormData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
   })
}


const handleSubmit = async(e)=>{
  e.preventDefault()
  const data = await axios.post("/create",formData)
  console.log(data)
  if(data.data.success){
    setAddSection(false)
    alert(data.data.message)
  }
}

const getFetchData = async()=>{
  const data = await axios.get("/")
  console.log(data)
  if(data.data.success){
    setDataList(data.data.data)
   
  }
}

useEffect(()=>{
    getFetchData( )
},[]) 
console.log(dataList)

  return (
    <>
    <div className="container">
      <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add +</button>

    {
      addSection && (
        <div className="addContainer">

        <form onSubmit={handleSubmit}>
        <div className="close-btn"onClick={()=>setAddSection(false)} ><MdClose/></div>

          <label htmlFor="name">Name :</label>
          <input type="name" id="name" name="name" onChange={handleOnChange} />
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" onChange={handleOnChange} />
          <label htmlFor="number">Mobile :</label>
          <input type="number" id="mobile" name="mobile" onChange={handleOnChange} />
          <button className="btn">Submit</button>
        </form>
      </div>
      )
    }

    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>


          </tr>
        </thead>
      </table>
    </div>

      
    </div>
    </>
  );
}

export default App;
