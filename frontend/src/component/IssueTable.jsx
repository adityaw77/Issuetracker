import React,{useState} from "react";
import axios from 'axios';
import './IssueTable.css';
function IssueTable() {
    const [form,setForm]=useState({
        title:'',
        description:'',
        due:'',
        owner:'',
        priority:''
    })
const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}
const handleSubmit=async (e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:5001/api/issues',form)
        alert('Issue created');
        setForm({  title:'',
        description:'',
        due:'',
        owner:'',
        priority:''
        })
    }
    catch(error){
        alert("error while creating issue");
        console.log(console.error());

    };  
}
  return (
    <div className="form-container"> {/* Added this class to style the wrapper */}
      <form onSubmit={handleSubmit}>
        Title: <input type="text" name="title"value={form.title} onChange={handleChange}/><br/>
        Description: <textarea name="description"value={form.description} onChange={handleChange}/><br/>
        Due: <input type="number" name="due"value={form.due} onChange={handleChange}/><br/>
        Owner: <input type="text" name="owner"value={form.owner} onChange={handleChange}/><br/>
        Priority: <select
  name="priority"
  value={form.priority}
  onChange={handleChange}
>
  <option value="">Select Priority</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select><br/>
        <button type="submit" className="Submit">Submit</button>
      </form>
    </div>
  );
}

export default IssueTable