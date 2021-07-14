import React,{useState} from 'react';
import {connect} from 'react-redux';


const AddTask = (props) => {
    const [task,setTask] = useState("");
    return (
        <div>
            <input type="text" value={task} onChange={(e)=>{
               setTask(e.target.value);
            }}></input>
            <button onClick={()=>{
             if(task.length > 0){
               let obj = {
                   id:Date.now(),
                   name:task,
               }  
               props.addtask(obj);
               setTask("");
             }
             else{
               alert("It cannot be empty");  
             }
            }}>Add a Task</button>
        </div>
    );
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addtask:(taskComp)=>{
           dispatch({type:"ADD_TASK",payload:taskComp})
        }
    }
}

export default connect(null,mapDispatchtoProps)(AddTask);
