import React from "react";

const List = ({ title, type, taskList, deleteTask }) => {
  return (
    <div className="col-12 col-md-6 text-center">
      <h2>{title}</h2>
      <hr />
      <table className="table table-striped">
        <tbody>
          {taskList.map((item, index) => {
            return (
              <tr>
                <td scope="row">
                  {index + 1}
                  <input
                    class="form-check-input"
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
                        class="btn btn-danger"
                        onClick={() => {
                          deleteTask(item.id);
                        }}
                      >
                        <i class="fa-solid fa-dumpster"></i>
                      </button>

                      <button type="button" class="btn btn-success">
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" class="btn btn-warning">
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => {
                          deleteTask(item.id);
                        }}
                      >
                        <i class="fa-solid fa-dumpster"></i>
                      </button>
                    </>
                  )}

                  <button type="button" class="btn btn-primary">
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
