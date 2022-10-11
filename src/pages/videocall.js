import React from "react";
import { FaBell, FaUserAlt, FaVolumeUp, FaBeer } from "react-icons/fa";
import {
  BsCalendar2RangeFill,
  BsFillCameraVideoFill,
  BsFillMicFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlinePresentToAll,
  MdAnalytics,
  MdArrowBackIos,
} from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { GiSoundWaves } from "react-icons/gi";
import "../pages/call.css";
import Chatbox from "../components/Chatbox";

const videocall = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <div className="flex flex-col justify-evenly functions basis-1/6 bg-transparent   ">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <FaUserAlt size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <FaBell size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <MdAnalytics size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <BsCalendar2RangeFill size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <BsFillCameraVideoFill size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <AiFillHome size={20} />
          </button>
        </div>

        {/* <button style={{ color: "white" }}>
              <FaBell size={20} />
            </button> */}

        {/* <button type="radio" className style={{ color: "white" }}>
              <MdAnalytics size={23} />
            </button>
            <button className style={{ color: "white" }}>
              <BsCalendar2RangeFill size={17} />
            </button>
            <button className style={{ color: "white" }}>
              <BsFillCameraVideoFill size={20} />
            </button>
            <button className style={{ color: "white" }}>
              <AiFillHome size={20} />
            </button> */}

        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <input
              className="input-range"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="5"
              orient="vertical"
            />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-6 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <FaVolumeUp size={20} />
          </button>
        </div>
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded inline-block px-4 py-2.5 text-white hover:bg-slate-500 focus:bg-slate-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <img
              src="https://i.imgur.com/yWVI5nY.png"
              style={{ heigh: "40px", width: "40px", paddingRight: "10px" }}
            />
          </button>
        </div>
      </div>
      <div className="functions basis-2/3 bg-transparent flex flex-col">
        <div
          className="flex flex-col basis-1/6 justify-center"
          style={{ color: "white" }}
        >
          <div className="flex flex-row justify-between">
            <div className="flex" style={{ marginTop: "10px" }}>
              <button className="hover:scale-125">
                <MdArrowBackIos
                  size={20}
                  style={{
                    display: "flex",
                    backgroundColor: "#354657",
                    paddingLeft: "4px",
                    borderRadius: "4px",
                    marginRight: "10px",
                    marginLeft: "28px",
                  }}
                />
              </button>
              <p>You are in call with Maynak.nft</p>
            </div>
            <div className="flex" style={{ marginTop: "10px" }}>
              <button className="hover:scale-125">
                <HiUserGroup
                  size={22}
                  style={{
                    display: "flex",
                    backgroundColor: "#354657",
                    padding: "2px",
                    borderRadius: "4px",
                  }}
                />
              </button>
            </div>
            <div className="flex" style={{ marginTop: "10px" }}>
              <button className="hover:scale-125">
                <IoMdAdd
                  size={20}
                  style={{
                    display: "flex",
                    backgroundColor: "#354657",
                    padding: "2px",
                    borderRadius: "4px",
                    marginRight: "10px",
                  }}
                />
              </button>
              <p style={{ marginRight: "28px" }}>Add user to the call</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-start"
            style={{
              color: "#F8000F",
            }}
          >
            <div className="flex flex-row justify-between">
              <button className="hover:scale-125">
                <BsFillRecordCircleFill
                  size={20}
                  style={{
                    display: "flex",
                    paddingLeft: "4px",
                    marginRight: "7px",
                    marginLeft: "28px",
                    marginTop: "6px",
                  }}
                />
              </button>
              <p
                className=" flex text-gray-300 text-sm"
                style={{ marginTop: "10px" }}
              >
                REC 00:12:36
              </p>
            </div>
          </div>
        </div>
        <div
          className="basis-2/3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://staticc.sportskeeda.com/editor/2021/05/3f88f-16224536148534-800.jpg"
            alt=""
          />
        </div>
        {/* <div className="flex basis-1/6">
          <div
                className="flex flex-row"
                style={{ alignItems: "flex-end" }}
              ></div>
        </div> */}

        <div className="flex flex-col flex-1 basis-1/6 space-between justify-center">
          <div className="flex flex-row" style={{ alignItems: "flex-end" }}>
            <button
              className="flex flex-1"
              style={{
                color: "white",
                justifyContent: "center",
              }}
            >
              <MdOutlinePresentToAll size={20} className="hover:scale-125" />
              {/* <input type={range}/> */}
            </button>
            <button
              className="flex flex-1"
              style={{ color: "white", justifyContent: "center" }}
            >
              <BsFillCameraVideoFill size={20} className="hover:scale-125" />
            </button>
            <div
              className="flex flex-1"
              style={{ color: "white", justifyContent: "center" }}
            >
              <button
                className="hover:scale-125"
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  marginRight: "10px",
                  backgroundColor: "red",
                  justifyContent: "center",
                  width: "40px",
                  height: "25px",
                  borderRadius: "10px",
                }}
              >
                <ImPhoneHangUp
                  size={20}
                  style={{
                    marginTop: "2px",
                    display: "flex",
                    backgroundColor: "red",
                    hover: "black",
                  }}
                />
              </button>
            </div>
            <button
              className="flex flex-1"
              style={{ color: "white", justifyContent: "center" }}
            >
              <BsFillMicFill size={20} className="hover:scale-125" />
            </button>
            <button
              className="flex flex-1"
              style={{ color: "white", justifyContent: "center" }}
            >
              <IoSettings size={20} className="hover:scale-125" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="functions flex basis-2/6"
        style={{
          color: "white",
          justifyContent: "center",
          padding: "0",
        }}
      >
        <div
          className=""
          style={{
            // backgroundImage: "URL(https://i.imgur.com/1cr0J7k.png)",
            width: "100%",
            height: "100%",
            // backgroundSize: "cover",
            padding: "0",
          }}
        >
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default videocall;
