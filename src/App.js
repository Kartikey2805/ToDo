import React from "react";
import Navbar from "./components/Navbar";
import {store} from './redux/store';
import {Provider} from 'react-redux';
import AddTask from "./components/AddTask";
import ShowAllTasks from "./components/ShowAllTasks";
import './components/styles.css'

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{textAlign:"center",width:"60%",margin:"0 auto",marginTop:"10px"}}>
      <Provider store={store}>
        <AddTask/>
        <ShowAllTasks/>
      </Provider>
      </div>
    </div>
  );
}

export default App;
