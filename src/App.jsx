import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Interfaces
import Dashboardinterface from "./Interfaces/Dashboardinterface";
import Individualprojectinterface from "./Interfaces/Individualprojectinterface";
import MainInterface from "./Interfaces/Maininterface";
import ImproveskillsInterface from "./Interfaces/Improveskillsinterface";
import Getpremium from "./Interfaces/Getpremium";
import Aboutus from "./Interfaces/Aboutusinterface";
import Contactus from "./Interfaces/Contactus";
import LoginInterface from "./Interfaces/LoginInterface";
import SignupInterface from "./Interfaces/SignupInterface";
import Nopage from "./Interfaces/Nopage";

//components
import Addprojectdata from "./components/addproject";
import Yourprojects from "./components/Yourprojects";
import Addnewtask from "./components/addtask";
import Accountsettings from "./components/Accountsettings";

//provider
import { Projectprovider } from "./components/Projectprovider";

//userauth
import Userauth from "./Auth/Userauth";

function App() {
  return (
    <Projectprovider>
      <Router>
        <Routes>
          <Route path="/" element={<MainInterface />}></Route>
          <Route
            path="/dashboard"
            element={
              <Userauth>
                <Dashboardinterface />
              </Userauth>
            }
          ></Route>
          <Route
            path="/dashboard/:id"
            element={
              <Userauth>
                <Individualprojectinterface />
              </Userauth>
            }
          ></Route>
          <Route
            path="/newproject"
            element={
              <Userauth>
                <Addprojectdata />
              </Userauth>
            }
          ></Route>
          <Route
            path="/newtask"
            element={
              <Userauth>
                <Addnewtask />
              </Userauth>
            }
          ></Route>
          <Route
            path="/projects"
            element={
              <Userauth>
                <Yourprojects />
              </Userauth>
            }
          ></Route>
          <Route
            path="/improveskills"
            element={<ImproveskillsInterface />}
          ></Route>
          <Route path="/getpremium" element={<Getpremium />}></Route>
          <Route
            path="/accountsettings"
            element={
              <Userauth>
                <Accountsettings />
              </Userauth>
            }
          ></Route>

          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/login" element={<LoginInterface />}></Route>
          <Route path="/signup" element={<SignupInterface />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </Router>
    </Projectprovider>
  );
}

export default App;
