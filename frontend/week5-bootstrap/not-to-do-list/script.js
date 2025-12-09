// task data source
let localData=JSON.parse(localStorage.getItem("taskList"))
let taskList =localData || [];

// render current state of task list
const renderTaskList = () => {
  // render good list

  let goodTaskList = taskList.filter((item) => item.type === "good");

  // select goodListTable Element
  let goodListTableElement = document.getElementById("goodListTable");

  let goodTrList = "";
  let goodIndex = 0;

  // populate good Tr list using goodTaskList
  for (let item of goodTaskList) {
    goodIndex += 1;
    let tr = ` <tr>
                    <th scope="row">${goodIndex}</th>
                            <td>${item.task}</td>
                            <td>${item.hour} Hour</td>
                            <td>
                                <button type="button" class="btn btn-danger"onClick="deleteTask('${item.id}')"><i
                                        class="fa-solid fa-dumpster"></i></button>

                                <button type="button" class="btn btn-success" onclick="swapTask('${item.id}')"><i
                                        class="fa-solid fa-arrow-right-to-bracket" ></i></button>
                    </td>
                </tr>`;

    goodTrList += tr;
  }

  console.log(goodTrList);

  goodListTableElement.innerHTML = goodTrList;

  //   render bad list

  let badTaskList = taskList.filter((item) => item.type === "bad");

  // select badListTable Element
  let badListTableElement = document.getElementById("badListTable");

  let badTrList = "";
  let badIndex = 0;

  // populate good Tr list using goodTaskList
  for (let item of badTaskList) {
    badIndex += 1;
    let tr = ` <tr>
                            <th scope="row">${badIndex}</th>
                            <td>${item.task}</td>
                            <td>${item.hour} Hour</td>
                            <td>
                                <button type="button" class="btn btn-warning"onclick="swapTask('${item.id}')"><i
                                        class="fa-solid fa-arrow-left-long"></i></button>
                                <button type="button" class="btn btn-danger" onClick="deleteTask('${item.id}')"><i
                                        class="fa-solid fa-dumpster"></i></button>

                            </td>
                        </tr>`;

    badTrList += tr;
  }

  console.log(goodTrList);
  badListTableElement.innerHTML = badTrList;

  // update bad hours
  let badHourElement = document.getElementById("badHours");
  let badHours = badTaskList.reduce((acc, item) => acc + item.hour, 0);

  badHourElement.innerText = badHours;

  // update total hours
  let totalHourElement = document.getElementById("totalHours");

  let totalHours = taskList.reduce((acc, item) => acc + item.hour, 0);

  totalHourElement.innerText = totalHours;
};

renderTaskList();

// random id generator
const randomIdGenerator = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let rString = "";
  let length = 6;

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);

    rString += characters[randomNumber];
  }

  return rString;
};

// update localstorage 
const updatelocalStorage=()=>{
localStorage.setItem("taskList",JSON.stringify(taskList));
}
// adding task
const addTask = () => {
  /**
   * 1. get value of task input element
   * 2. get value of hour input element
   * 3. get value of type input element
   * 3.5. add limiation business rule
   * 4. create a task object
   * 5. push task object to task list array
   * 6. render task list
   */

  let taskInputValue = document.getElementById("task").value;
  let hourInputValue = document.getElementById("hour").value;
  let typeInputValue = document.getElementById("type").value;

  if (
    taskInputValue.trim() != "" &&
    hourInputValue.trim() != "" &&
    taskInputValue.trim() != ""
  ) {
    let taskObject = {
      id: randomIdGenerator(),
      task: taskInputValue,
      hour: parseInt(hourInputValue),
      type: typeInputValue,
    };

    const MAX_WEELKY_HOUR=7*24;
    const totalHours= taskList.reduce((acc,item)=>acc+item.hour,0);
    if (totalHours + taskObject.hour<=MAX_WEELKY_HOUR){
        taskList.push(taskObject);
        updatelocalStorage();
        renderTaskList();

    }else{
        alert("maximum weekly hours exceedec")
    }

  } else {
    alert("require input values");
  }
};

// swap task
const swapTask = (id) => {
  let selectedTask = taskList.find((item) => item.id === id);

  //   if(selectedTask.type == "good"){
  //     selectedTask.type = "bad";
  //   }
  //   else{
  //     selectedTask.type = "good";
  //   }

  selectedTask.type = selectedTask.type === "good" ? "bad" : "good";
updatelocalStorage();
  renderTaskList();
};

//delete task
const deleteTask=(id)=>{
    taskList=taskList.filter((item)=>item.id!=id);
    updatelocalStorage();
    renderTaskList();
}