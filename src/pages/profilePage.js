import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddContact from "../components/contact/AddContact";
import AddContactConf from "../components/contact/AddContactConf";
import ProfileContact from "../components/contact/ProfileContact";
import Navbar from "../components/Navbar";
import NewNoti from "../components/notification/NewNoti";
import Notifications from "../components/notification/Notifications";

import ProfileHome from "../components/ProfileHome";
import ProfileProfile from "../components/ProfileProfile";

const profilePage = () => {
  return (
    <div>
      <Navbar />
      <Notifications />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfileHome />} />
          <Route />
        </Routes>
      </Router> */}
    </div>
  );
};

export default profilePage;
