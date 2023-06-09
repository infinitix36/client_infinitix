import NavBar from "../components/Navbar";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

const Admin = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />

      <Row className="justify-content-center flex-column flex-md-row">
        <Col xs="auto" className="mb-2 mb-md-0">
          <Link to="/pending">
            <Button variant="primary" size="lg">
              Verify New Users
            </Button>
          </Link>
        </Col>

        <Col xs="auto" className="mb-2 mb-md-0">
          <Link to="/announcement">
            <Button variant="primary" size="lg">
              Make Announcement
            </Button>
          </Link>
        </Col>
        <Col xs="auto" className="mb-2 mb-md-0">
          <Link to="/assignprojectmanager">
            <Button variant="primary" size="lg">
              Assign Project Manager
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default Admin;
