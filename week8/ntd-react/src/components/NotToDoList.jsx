import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TotalHour from "./TotalHour";
import axios from "axios";

const NotToDoList = () => {
  const [taskList, setTaskList] = useState([
    // {
    //   id: "1",
    //   task: "Task 1",
    //   hour: 10,
    //   type: "good",
    // },
    // {
    //   id: "2",
    //   task: "Task 2",
    //   hour: 20,
    //   type: "bad",
    // },
  ]);
  const [totalHours,setTotalHours]=useState(0);

  const dataFormServer=async()=>{
  let response= await axios.get("http://localhost:3000/api/v1/tasks")
   setTaskList(response.data.tasks);
  }
useEffect(()=>{
  // let dataFormLocal=localStorage.getItem('taskList');
  // setTaskList(JSON.parse(dataFormLocal)||[]);
  dataFormServer();
},[])

  useEffect(()=>{
     setTotalHours(taskList.reduce((acc,item)=>acc + parseInt(item.hour),0));
     localStorage.setItem("taskList",JSON.stringify(taskList));
  },[taskList])
  return (
    <div className="container">
      <div className="row m-5 py-3 text-center">
        <div className="col">
          <h1>Not to do list</h1>
        </div>
      </div>
      {/* input form */}
      <AddTask setTaskList={setTaskList}/>
      {/* Task List */}
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      {/* Totak Hours */}
      <TotalHour totalHours={totalHours}/>
    </div>
  );
};

export default NotToDoList;
