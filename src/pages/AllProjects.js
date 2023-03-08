import Card from "../components/Card";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
const AllProjects = () => {
  return (
    <div>
      <NavBar />
      <div
          className="side-bar"
          style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
        >
          <SideBar />
        </div>
     
      
      <div className="container mt-5"> <br></br>  </div>
      <div className="container mt-5 ">
        <div className="row mt-3">
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>{" "}
          <div className="col-md-4">
            <Card />
          </div>{" "}
        </div>
      </div>
      </div>
    
    
  );
};
export default AllProjects;
