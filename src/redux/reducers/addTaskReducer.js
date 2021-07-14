import React from 'react';
const initialState = [];

const addTaskReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_TASK':
         return [...state,action.payload]
        case 'REMOVE_TASK':
         let idx = state.findIndex((task)=>task.id === action.payload);
         let newState = [...state];
         newState.splice(idx,1);
         return [...newState];
        default: return state
    }
}


export default addTaskReducer;
