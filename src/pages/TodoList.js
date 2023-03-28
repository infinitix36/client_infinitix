import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
// import SideBar from "../components/Sidebar";
import axios from "axios";
import swal from "sweetalert";

const TodoList = () => {
  console.log("Component Rendered !");
  const [task, setTask] = useState();
  const [todoList, setTodoList] = useState(); //only containing todos
  const [todoID, setToDoID] = useState();
  const [due, setDue] = useState();
  const [resetList, setResetList] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todo/showusertodo/641c62494d6f0b66c98a5c35")
      .then(function (response) {
        setToDoID(response.data[0]._id);
        setTodoList(response.data[0].tasks);
      });
  }, [resetList]);
  console.log(todoList);

  // const currentYear = new Date().getFullYear();
  // const maxDate = `${currentYear + 1}-12-31`;
  // const minDate = `${currentYear}-${currentYear.getMonth + 1}-${
  //   currentYear.getDate - 1
  // };

  const addTask = (e) => {
    e.preventDefault();
    const postData = {
      userID: "641c62494d6f0b66c98a5c35",
      taskName: task,
      dueDate: due,
    };

    axios
      .post("http://localhost:8000/todo/addtask", postData)
      .then((res) => {
        if (res.data.status === true) {
          swal("Good job!", res.data.message, "success");
          setResetList(resetList + 1);
          setTask("");
          setDue("");
        } else {
          swal("Error !", res.data.message, "danger");
        }
      })
      .catch((error) => {
        swal("Sorry !", "BackEnd Error ! Try again Later !!", "info");
      });
  };

  const markAsDone = (taskID) => {
    const postData = {
      todoid: todoID,
      taskid: taskID,
    };
    axios
      .post("http://localhost:8000/todo/markasdone", postData)
      .then((res) => {
        if (res.data.status === true) {
          swal("Good job!", res.data.message, "success");
          setResetList(resetList + 1);
        } else {
          swal("Error !", res.data.message, "danger");
        }
      })
      .catch((error) => {
        swal("Sorry !", "BackEnd Error ! Try again Later !!!!", "info");
      });
  };


  const deleteTask = (taskID) => (e) => {
    e.preventDefault();

  const deleteTask = (taskID) => (event) => {
    event.preventDefault();

    const postData = {
      todoid: todoID,
      taskid: taskID,
    };
    axios
      .post("http://localhost:8000/todo/deleteTask", postData)
      .then((res) => {
        if (res.data.status === true) {
          swal("Task Deleted!", res.data.message, "success");
          setResetList(resetList + 1);
        } else {
          console.log(res.data.message);
          swal("Error !", res.data.message, "danger");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // const deleteTask = (taskID) => (e) => {

  //   const postData = {
  //     todoid: todoID,
  //     taskid: taskID,
  //   };

  //   axios
  //     .delete(`http://localhost:8000/todo/deleteTask/${todoID}/${taskID}`)
  //     .then((res) => {
  //       if (res.data.status === true) {
  //         swal("Task Deleted!", res.data.message, "success");
  //         setResetList(resetList + 1);
  //       } else {
  //         console.log(res.data.message);
  //         swal("Error !", res.data.message, "danger");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <NavBar />
      <div className="container ">
        {/* <div
          className="side-bar"
          style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
        >
          <SideBar />
        </div> */}
      </div>
      <div>
        <div className="todos mt-5">
          <div class="container">
            <h4 className="bg-dark text-white p-2 rounded">To-Do List</h4>

            <div className="addtask">
              <form onSubmit={addTask}>
                <div className="row mt-2 justify-content-md-center ">
                  <div className="col-md-4">
                    <input
                      required={true}
                      type="text"
                      class="form-control"
                      placeholder="Add a new task"
                      aria-label="Add a new task"
                      aria-describedby="button-addon2"
                      value={task}
                      onChange={(e) => {
                        setTask(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-md-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Select Due Date"
                      onFocus={(e) => (e.target.type = "date")}
                      value={due}
                      id="dob"
                      onChange={(e) => setDue(e.target.value)}
                    ></input>
                  </div>
                  <div className="col-md-1">
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <h6>
              <br></br>To be Done
            </h6>
            <hr />

            <div>
              {todoList?.map((item) => {
                if (item?.taskStatus === false) {
                  return (
                    <div className="row mt-2">
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          disabled
                          value={item.taskName}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          className="form-control"
                          type="text"
                          disabled
                          value={item.dueDate}
                        />
                      </div>
                      <div className="col-md-1">
                        <button
                          className="btn btn-outline-success"
                          onClick={() => markAsDone(item.taskid)}
                        >
                          Done
                        </button>
                      </div>
                      <div className="col-md-1">
                        <button

                          type="button"

                          className="btn btn-outline-danger"
                          onClick={deleteTask(item.taskid)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <h6 className="mt-4">Completed</h6>
            <hr />
            <div>
              {todoList?.map((item) => {
                if (item?.taskStatus === true) {
                  return (
                    <div className="row mt-2">
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          disabled
                          value={item.taskName}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          className="form-control"
                          type="text"
                          disabled
                          value={item.dueDate}
                        />
                      </div>
                      <div className="col-md-1">
                        <button
                          className="btn btn-outline-danger"
                          onClick={deleteTask(item.taskid)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
