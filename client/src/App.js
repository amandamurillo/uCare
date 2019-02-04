import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import DoctorProfile from "./pages/DoctorProfile/DoctorProfile";
import PatientList from "./pages/PatientList/PatientList";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import NewAppt from "./pages/NewAppt/NewAppt";
import PatientFile from "./pages/PatientFile/PatientFile";
import Search from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <Router>
     <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/doctor" component={DoctorProfile} />
          <Route exact path="/patientlist" component={PatientList} />
          <Route exact path="/patient" component={PatientProfile} />
          <Route exact path="/newappt" component={NewAppt} />
          <Route exact path="/patient/:id" component={PatientFile} />
          <Route exact path="/search" component={Search} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
