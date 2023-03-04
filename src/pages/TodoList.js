
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

const TodoList = () => {
    
    return (<div>
        <NavBar/>
        <div className="side-bar"
            style={{position: "fixed",left: "0",top: "64px",bottom: "0",}}
          >
            <SideBar />
          </div>
        hi
    </div>)
};
export default TodoList;
