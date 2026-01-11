import React from "react";
import List from "./List";

const TaskList = ({ taskList, setTaskList }) => {
  let goodTaskList = taskList.filter((item) => item.type === "good");

  let badTaskList = taskList.filter((item) => item.type === "bad");

  const deleteTask = (id) => {
    let tempTaskList = taskList.filter((item) => item.id != id);
    setTaskList(tempTaskList);
  };

  return (
    <div className="row">
      <List
        title="Good List"
        type="good"
        taskList={goodTaskList}
        deleteTask={deleteTask}
      />
      <List
        title="Bad List"
        type="bad"
        taskList={badTaskList}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskList;
