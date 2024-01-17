import Navbar from "./components/navbar/Navbar";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddUser from "./components/users/adduser/AddUser";
import EditUser from "./components/users/edituser/EditUser";
import ViewUser from "./components/users/viewuser/ViewUser";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/edituser/:id" element={<EditUser/>}/>
        <Route path="/viewuser/:id" element={<ViewUser/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
