import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./pages/registercard";
import Login from "./pages/logincard";
import Home from "./pages/Home";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
