import React from "react";

const List = ({ title, type, taskList, deleteTask,swapTask}) => {
  return (
    <div className="col-12 col-md-6 text-center">
      <h2>{title}</h2>
      <hr />
      <table className="table table-striped">
        <tbody>
          {taskList.map((item) => {
            return (
              <tr>
                <td scope="row">
                  {/* {index + 1} */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hour}</td>
                <td>
                  {type == "good" ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteTask(item.id);
                        }}
                      >
                        <i className="fa-solid fa-dumpster"></i>
                      </button>

                      <button type="button" className="btn btn-success" onClick={()=>{swapTask(item.id,item.type)}}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" className="btn btn-warning" onClick={()=>{swapTask(item.id,item.type)}}>
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteTask(item.id);
                        }}
                      >
                        <i className="fa-solid fa-dumpster"></i>
                      </button>
                    </>
                  )}

                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {type === "good" ? (
        <>
          <div className="alert alert-success" role="alert">
            You saved{" "}
            {taskList.reduce((acc, item) => acc + parseInt(item.hour), 0)} hr
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-danger" role="alert">
            You wasted{" "}
            {taskList.reduce((acc, item) => acc + parseInt(item.hour), 0)} hr
          </div>
        </>
      )}
    </div>
  );
};

export default List;
