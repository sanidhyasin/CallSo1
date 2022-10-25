import React from "react";
import { FaBell, FaUserAlt, FaVolumeUp, FaBeer } from "react-icons/fa";
import {
  BsCalendar2RangeFill,
  BsFillCameraVideoFill,
  BsFillMicFill,
  BsImage,
  BsImageFill,
} from "react-icons/bs";
import { AiFillHome, AiOutlineSend } from "react-icons/ai";
import {
  MdOutlinePresentToAll,
  MdAnalytics,
  MdArrowBackIos,
} from "react-icons/md";
import { IoSettings, IoSendSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { GiSoundWaves } from "react-icons/gi";
import "../pages/call.css";
import Chatbox from "../components/Chatbox";
import ChatCard from "../components/videocall/ChatCard";

const videocall = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <div className="flex flex-col justify-evenly basis-1/12 bg-transparent ml-2">
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
      <div className="basis-9/12 bg-transparent flex flex-col">
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
          <hr />
        </div>
        <div
          className="basis-2/3"
          style={{
            display: "flex",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.3)",
            position: "relative",
          }}
          id="video-call"
        >
          <div
            className=""
            style={{
              margin: "10px",
              position: "absolute",
              top: "0",
              right: "0",
              // opacity: "0.9",
              width: "220px",
              height: "180px",
              background: "red",
            }}
          >
            {/* <img
              src="https://www.thesun.co.uk/wp-content/uploads/2022/08/553fc8c0-4e02-4a96-800b-a2453827fe2b.jpg?w=670"
              alt=""
            /> */}
          </div>
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
        className="flex flex-col basis-4/12 text-white  items-center justify-center mx-5 my-6 rounded-3xl"
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.4)",
          // backgroundColor: "rgba(55,23,29,0.9)",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      >
        <div className="flex basis-1/12 flex-row items-center justify-center w-full h-full py-4 px-4">
          <div className="flex basis-1/2 flex-row items-center justify-center border-2 transition-all rounded-md mx-4 py-2 text-lg">
            <h1>Messages (4)</h1>
          </div>

          <div className="flex basis-1/2 flex-row items-center justify-center hover:border-2 transition-all rounded-md mx-4 py-2 text-lg">
            <h1>Particpants</h1>
          </div>
        </div>
        {/* <div class="relative flex py-1 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400">Content</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div> */}
        <div className="flex basis-3/12 w-10/12 flex-row items-center justify-center border-t-2 border-b-2 py-3 h-full">
          <div
            className="flex flex-col items-start justify-start border-2 w-full h-full rounded-xl py-2 px-3"
            style={{
              backgroundColor: "rgba(80, 99, 117, 0.31)",
            }}
          >
            <div className="flex border-b-2 w-full py-1">
              <div className="flex">Use of graphics</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-6/12 w-full items-start justify-start h-full overflow-auto py-4">
          {/* <div className="flex flex-row basis-1/6 items-start justify-start w-full px-2">
            <div className="flex px-2">
              <div>
                <img src="https://i.imgur.com/rFxCTa3.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col w-4/5">
              <div className="flex text-sm font-extralight">Caesy</div>
              <div
                className="flex border-2 rounded-r-md rounded-bl-md"
                // style={{
                //   backgroundColor: "rgba(0, 0, 0, 0.3)",
                // }}
              >
                <div className="px-3 py-2 text-sm">
                  Hello Guys! Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="px-3 py-2 text-xs font-extralight">
                  12:02 pm
                </div>
              </div>
            </div>
          </div> */}
          <ChatCard />
          <div className="flex flex-row basis-1/6 items-start justify-start w-fit px-2 my-2">
            <div className="flex px-2">
              <div>
                <img src="https://i.imgur.com/rFxCTa3.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col w-4/5">
              <div className="flex text-xs font-extralight text-gray-300">
                Caesy
              </div>
              <div
                className="flex border-2 rounded-r-md rounded-bl-md flex-row justify-between"
                // style={{
                //   backgroundColor: "rgba(0, 0, 0, 0.3)",
                // }}
              >
                <div className="px-3 py-2 text-xs flex">Hello Guys!</div>
                <div className="px-3 py-2 text-xs font-extralight flex">
                  12:02 pm
                </div>
              </div>
            </div>
          </div>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </div>
        <div className="flex basis-2/12 w-full h-full flex-col items-center justify-center px-6 py-7">
          <div
            className="flex flex-row w-full items-center justify-center h-full border-2 rounded-3xl"
            style={{
              backgroundColor: "rgba(255, 255, 250, 0.1)",
            }}
          >
            <div className="flex flex-col items-center justify-center basis-1/6 ">
              <div className="flex text-gray-300">
                <BsImageFill size={25} />
              </div>
            </div>
            <div className="flex basis-4/6 border-l-2 px-4">
              <input
                className="outline-none bg-transparent"
                type="text"
                placeholder="Write message here"
              />
            </div>
            <div className="flex basis-1/6 flex-col items-center justify-center">
              <div
                className="flex flex-col items-center justify-center border-2 rounded-3xl"
                style={{
                  backgroundColor: "rgba(117, 117, 117, 0.64)",
                }}
              >
                <div className=" flex px-2 py-1 text-white">
                  <AiOutlineSend size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default videocall;
