import React from "react";
import List from "./List";
import axios from "axios";

const TaskList = ({ taskList=[], setTaskList }) => {
  let goodTaskList = (taskList||[]).filter((item) => item.type == "good");

  let badTaskList = (taskList||[]).filter((item) => item.type == "bad");

  const deleteTask = async(id) => {
    // let tempTaskList = taskList.filter((item) => item.id != id);
    try{
    let response= await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`)
    if(response.data.status=="success"){
      const updatedTasklist=taskList.filter((item)=>(item._id ||item.id)!==id);
      setTaskList(updatedTasklist);
    }
    }
    catch(err){
      return alert("couldnt delete data")
    }
   
  };
  const swapTask = async(id,currentType) => {
    let newType=currentType=="good"?"bad":"good";
    try{
    let response= await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`,{type:newType})
    if(response.data.status=="success"){
      const updatedTasklist=taskList.map((item)=>{
        if((item._id||item.id)== id){
          return {...item,type:newType}
        }
        return item;
      });
      setTaskList(updatedTasklist);
    }
    }
    catch(err){
      return alert("couldnt swap data")
    }
   
  };

  return (
    <div className="row">
      <List
        title="Good List"
        type="good"
        taskList={goodTaskList}
        deleteTask={deleteTask}
        swapTask={swapTask}
      />
      <List
        title="Bad List"
        type="bad"
        taskList={badTaskList}
        deleteTask={deleteTask}
        swapTask={swapTask}
      />
    </div>
  );
};

export default TaskList;
