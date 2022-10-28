import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Popup from "./pages/popup";
import Calling from "./pages/calling";
import Call from "./pages/call";
import Message from "./pages/message";
import MessageChat from "./pages/messagechat";
import ProfilePage from "./pages/profilePage";
import ProfileHome from "./components/ProfileHome";
import Videocall from "./pages/videocall";
import ProfileContact from "./components/contact/ProfileContact";
// import "../src/App.css";

function App() {
  return (
    <div className="body">
      {/* <ProfileContact /> */}
      {/* <Message /> */}
      {/* <Notification /> */}
      {/* <Videocall /> */}
      <MessageChat />
    </div>
  );
}

export default App;
