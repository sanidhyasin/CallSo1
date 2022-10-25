import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Popup from "./pages/popup";
import Calling from "./pages/calling";
import Call from "./pages/call";
import ProfilePage from "./pages/profilePage";
import ProfileHome from "./components/ProfileHome";
import Videocall from "./pages/videocall";
// import "../src/App.css";

function App() {
  return (
    <div className="body">
      {/* <ProfilePage /> */}
      <Videocall />
    </div>
  );
}

export default App;
