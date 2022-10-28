import React from "react";
import { BiHome, BiMailSend, BiUser } from "react-icons/bi";
import { FaRegAddressBook, FaRegUser, FaUser } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { MdOutlineNotificationsActive } from "react-icons/md";
import MssgChatCard from "../components/message/MssgChatCard";

const message = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <div
        className="flex flex-col basis-1/12 my-12 ml-6 pl-5 pr-5 border-2 rounded-l-3xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <FaRegUser size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <FaRegAddressBook size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <BiMailSend size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <MdOutlineNotificationsActive size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col justify-center basis-1/5 rounded-3xl">
          <div className="flex flex-row justify-center">
            <button className="border-2 px-6 py-2 rounded-3xl hover:scale-110 transition-all">
              <BiHome className="flex text-white" size={50} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex basis-3/12 flex-col my-12 border-2"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-row items-center justify-center basis-2/12 font-bold text-2xl text-white">
          Chat
        </div>
        <div
          className="flex flex-col px-2 h-full overflow-auto mb-4"
          style={{
            display: "flex",
          }}
        >
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center basis-8/12 text-white my-12 mr-4 pr-10 pl-10 border-2 rounded-r-3xl font-bold text-3xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        Send end to end encrypted message to any wallet on chain
      </div>
    </div>
  );
};

export default message;
