import React from "react";
import { FaBell, FaUserAlt, FaVolumeUp, FaBeer } from "react-icons/fa";
import {
  BsCalendar2RangeFill,
  BsFillCameraVideoFill,
  BsFillMicFill,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdOutlinePresentToAll, MdAnalytics } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { ImPhoneHangUp } from "react-icons/im";
import { GiSoundWaves } from "react-icons/gi";
import "../pages/call.css";

const call = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <div className="flex flex-col justify-evenly functions basis-1/6 bg-transparent ml-2  ">
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
        <div className="basis-5/6">1</div>
        <div className="flex basis-1/6">
          {/* <div
                className="flex flex-row"
                style={{ alignItems: "flex-end" }}
              ></div> */}
        </div>

        <div className="flex flex-col flex-1 basis-2/6 mt-60 ml-80 mr-72">
          <div className="flex mb-2">
            <div
              style={{
                display: "flex",
                color: "white",
                marginBottom: "15px",
                marginRight: "25px",
              }}
            >
              <GiSoundWaves size={40} />
            </div>
            <div
              className="space-evenly flex-col"
              style={{
                display: "flex",
                color: "white",
              }}
            >
              <p style={{ display: "flex", fontSize: "11px", color: "gray" }}>
                Now
              </p>
              <h1 style={{ display: "flex" }}>
                You are in call with Harsh.web3
              </h1>
            </div>
          </div>
          <div className="flex flex-row mt" style={{ alignItems: "end" }}>
            <button
              className="flex-1"
              style={{
                color: "white",
                justifyContent: "center",
              }}
            >
              <MdOutlinePresentToAll size={20} className="hover:bg-slate-700"/>
              {/* <input type={range}/> */}
            </button>
            <button className="flex-1" style={{ color: "white" }}>
              <BsFillCameraVideoFill size={20} className="hover:bg-slate-700" />
            </button>
            <div className="flex-1 pr-10" style={{ color: "white" }}>
              <button
                className=""
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
                    hover:"black",
                  }} 
                />
              </button>
            </div>
            <button className="flex-1" style={{ color: "white" }}>
              <BsFillMicFill size={20} className="hover:bg-slate-700"/>
            </button>
            <button className="flex-1" style={{ color: "white" }}>
              <IoSettings size={20} className="hover:bg-slate-700"/>
            </button>
          </div>
        </div>
      </div>
      <div
        className="functions flex basis-1/6 bg-transparent"
        style={{
          color: "white",
          justifyContent: "center",
          paddingLeft: "100px",
        }}
      >
        <img
          src="https://i.imgur.com/zTQR7om.png"
          style={{
            display: "flex",
            height: "50px",
            width: "52px",
            marginTop: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default call;
