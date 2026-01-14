import axios from "axios";
import React, { useState } from "react";

const AddTask = ({ setTaskList }) => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState(0);
  const [type, setType] = useState("good");

  const randomIdGenerator = (inputLen = 6) => {
    /**
     * Function Description: Generate random string with length 6
     * inputLen: input length of string, default value is 6
     */
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let rString = "";
    let length = inputLen;

    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length);

      rString += characters[randomNumber];
    }

    return rString;
  };

  const addTask = async() => {
    let taskObject = {
      task,
      hour,
      type,
    };

    let response= await axios.post("http://localhost:3000/api/v1/tasks",taskObject);
    taskObject.id= response.data.task._id;
    // let array1 = [1,2,3];

    // array1 = [...array1, 10];

    setTaskList((previous) => {

      let tempTaskList=[...previous,taskObject]
     
      return tempTaskList;
    });
  };
  return (
    <div className="row py-4 px-2 mb-5 rounded-pill  shadow-lg">
      <div className="col-6">
        <div className="">
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Add Task"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="col-2">
        <div className="">
          <input
            type="number"
            className="form-control"
            id="hour"
            placeholder="Hour"
            value={hour}
            onChange={(event) => {
              setHour(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="col-2">
        <select
          className="form-select"
          aria-label="Default select example"
          id="type"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="good">Good</option>
          <option value="bad">Bad</option>
        </select>
      </div>
      <div className="col-2">
        <button
          type="button"
          id="add-btn"
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="col-2">
        <button
          type="button"
          id="update-btn"
          className="btn btn-primary hidden"
        >
          Update Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
