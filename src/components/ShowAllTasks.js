import React from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';

const ShowAllTasks = (props) => {
    return (
        <div className="showAll">
            {
               props.state.length > 0 && props.state.map((task)=>{
                    return(
                      <div key={task.id} style={{width:"30%",minWidth:"30%"}}>
                         <h2>{task.name}</h2>
                         <Button variant="contained" color="secondary" onClick={()=>{
                           props.removeTask(task.id);
                         }}>Delete Task</Button>
                      </div>
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {state};
 }
 
 const mapDispatchtoProps = (dispatch) => {
     return {
         removeTask:(id)=>{
            dispatch({type:"REMOVE_TASK",payload:id})
         }
     }
 }
 
 export default connect(mapStateToProps,mapDispatchtoProps)(ShowAllTasks);
 