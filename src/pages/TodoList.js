import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
// import SideBar from "../components/Sidebar";
import axios from "axios";
import swal from "sweetalert";

const TodoList = () => {
  const [task, setTask] = useState();
  const [todoList, setTodoList] = useState();
  const [due, setDue] = useState();
  const [resetList, setResetList] = useState(0);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/todo/showusertodo/1234")
      .then(function (response) {
        setTodoList(response.data[0].tasks);
      });
  }, [resetList]);
  console.log(todoList);

  const addTask = (e) => {
    e.preventDefault();
    const postData = {
      userID: "1234",
      taskName: task,
      dueDate: due,
    };
    axios
      .post("http://localhost:8000/todo/addtask", postData)
      .then((res) => {
        if (res.data.status === true) {
          swal("Good job!", res.data.message, "success");
          setResetList(resetList + 1);
          setTask();
          setDue();
        } else {
          swal("Wrror !", res.data.message, "danger");
        }
      })
      .catch((error) => {
        swal("Sorry !", "BackEnd Error ! Try again Later !!", "info");
      });
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        {/* <div
          className="side-bar"
          style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
        >
          <SideBar />
        </div> */}
      </div>
      <div>
        <h1>
          hi
          <br />
          <br />
        </h1>

        <div className="todos">
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
                </div >
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
            <h6><br></br>To be Done</h6>
            <hr />



            <div>
              {todoList?.map((item) => {
                if (item?.taskStatus === false) {
                  return (
                    <div className="row mt-2 justify-content-md-center">
                      <div className="col-md-6">
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
                      <div className="col-md-3">
                        <button className="btn btn-outline-success">
                          Mark as Done
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>




            <h6 className="mt-4">Completed</h6>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
