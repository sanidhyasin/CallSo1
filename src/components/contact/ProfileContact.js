import React from "react";
import ProfileSidebar from "../ProfileSidebar";
import { IoAdd } from "react-icons/io5";
import ContactCard from "./ContactCard";

const ProfileContact = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <ProfileSidebar />
      <div
        className="flex flex-col basis-5/6 m-12 border-2 rounded-l-3xl pb-10 pt-10 overflow-auto"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-row basis-1/4 justify-evenly items-center text-white">
          <div className="flex basis-1/3"></div>
          <div className="flex font-bold text-3xl basis-1/3 items-end justify-end pr-24">
            <h1>Contacts</h1>
          </div>
          <div className="flex flex-row items-end justify-end basis-1/3 pr-10">
            <div
              className="flex border-2 rounded-full hover:scale-110 transition-all"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <button>
                <IoAdd size={20} className="text-white m-2" />
              </button>
            </div>
          </div>
        </div>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        {/* <div className="flex basis-1/4 flex-row text-white items-center justify-center">
          <div className=" flex basis-1/6 flex-row items-center justify-center">
            <div className="flex w-32">
              <img
                className="border-2 rounded-3xl"
                src="https://nftsolana.io/wp-content/uploads/2021/12/sbOisxEk_400x400.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex basis-2/6 flex-row items-center justify-center">
            <div
              className="flex border-2 rounded-3xl w-full flex-row items-center justify-center mr-6 ml-6 py-2"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex">Jalals#1022</div>
            </div>
          </div>
          <div className=" flex basis-2/6 flex-row items-center justify-center ">
            <div
              className="flex border-2 rounded-3xl w-full flex-row items-center justify-center mr-6 ml-6 py-2"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex">0xwalletadrress</div>
            </div>
          </div>
          <div className=" flex basis-1/6 flex-row items-center justify-center">
            <div
              className="flex border-2 rounded-3xl w-full flex-row items-center justify-center mr-6 ml-6 py-2 hover:scale-110 transition-all"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <button className="">
                <div className="flex">Call</div>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileContact;
