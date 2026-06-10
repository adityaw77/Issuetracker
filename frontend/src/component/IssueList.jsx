import React, { useState,useEffect } from "react";
import axios from 'axios';

function IssueList(){
    const[issues,setIssues]=useState([]);

    const fetchIssue=async()=>{
        try{
            const res=await axios.get('http://localhost:5001/api/issues');
            setIssues(res.data);
        }catch(error){
            alert("error while fetching the issue");
            console.log(error);
        }
    };
    const deleteIssue=async(id)=>{
        try{
            await axios.delete(`http://localhost:5001/api/issues/${id}`);
            //update State Immediately
            setIssues(prevIssues=>prevIssues.filter(ticket=>ticket._id!==id));
        }catch(error){
            alert("error in deleteing the issue");
            console.log(error);
        }
    }
    const updateStatus=async(id,newStatus)=>{
        try{
            await axios.put(`http://localhost:5001/api/issues/${id}`,{status:newStatus});
            //update only that ticket status in state
            //... is called spread operator
            setIssues(prevIssues=>
                prevIssues.map(issue=>
                    issue._id===id?{...issue,status:newStatus}:issue
                )
            );
        }catch(error){
            alert("error in updating the issue");
            console.log(error);
      }
    };
    useEffect(()=>{
        fetchIssue();
        window.dispatchEvent(new Event("IssueCreated"));
    },[]);
    return(
        <div className="issue-list">
            <h2>Issues</h2>
            {issues.length===0 && <p>No issues found</p>}
            {issues.map((issue)=>(
                <div key={issue._id}className="issue-card">
                    <h3>{issue.title}</h3>
                    <p><strong>description:</strong>{issue.description}</p>
                    <p><strong>priority:</strong>{issue.priority}</p>
                    <p>
                        <strong>Status:</strong>{' '}
                        <span className={`status-badge ${
                            issue.status==='Open'?'status-open':
                            issue.status==='In progress'?'status-in-progress':
                            'status-resolved'
                        }`}>
                        {issue.status}
                        </span>
                    </p>
                    <div className="ticket-button">
                        <button onClick={()=>updateStatus(issue._id,'In progress')}>In progress</button>
                        <button onClick={()=>updateStatus(issue._id,'Resolved')}>Resolved</button>
                        <button className="delete-btn"onClick={()=>deleteIssue(issue._id)}>Delete</button>
                    </div>
                </div>
           ) )}
        </div>
    )
}

export default IssueList;