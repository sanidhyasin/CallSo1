import React from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import ProfileSidebar from "../ProfileSidebar";

const NewNoti = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <ProfileSidebar />
      <div
        className="flex flex-col basis-5/6 m-12 border-2 rounded-3xl pb-10 pt-10 overflow-auto"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-row basis-1/12 justify-evenly items-center text-white">
          <div className="flex basis-1/3"></div>
          <div className="flex font-bold text-3xl basis-1/3 items-end justify-end pr-24">
            <h1>New Notifications</h1>
          </div>
          <div className="flex flex-row items-end justify-end basis-1/3 pr-10">
            <div
              className="flex border-2 rounded-full hover:scale-110 transition-all"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <button>
                <IoClose size={20} className="text-white m-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex basis-9/12 flex-col items-center justify-center text-white">
          <div className="flex mb-5">
            <img
              className="h-28 border-2 rounded-3xl"
              src="https://i.seadn.io/gae/dzHaEW6m0Ho0J6JvdT30O8_vWQfWHDPFuqhE2-Rijgdar8ROxcjJC4eRt8wfmpQW9cSTBNsrxzuIrkpTSx_uf0pbZYjtkp6xMriDXQ?auto=format&w=1000"
              alt=""
            />
          </div>
          <button>
            <div className="flex border-2 rounded-3xl px-6 py-2 hover:scale-105 transition-all mt-5 mb-5 font-bold">
              <h1>Oxstoneystark.nft</h1>
            </div>
          </button>
          <div className="flex mt-5 font-bold text-xl">
            has added you to their contacts...
          </div>
        </div>
        {/* <div className="flex flex-col basis-5/12 items-center justify-center text-white pb-8">
          <div
            className="flex basis-1/3 border-2 rounded-3xl px-20 items-center justify-center mb-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <input
              className="focus:outline-none bg-transparent"
              type="text"
              placeholder="Name"
            />
          </div>
          <div
            className="flex basis-1/3 border-2 rounded-3xl px-20 items-center justify-center mb-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <input
              className="focus:outline-none bg-transparent"
              type="text"
              placeholder="Oxwalletadrress"
            />
          </div>
          <div
            className="flex basis-1/3 border-2 rounded-3xl px-20 items-center justify-center hover:scale-105 transition-all"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <button className="">
              <h1 className="mr-12">Choose the Avatar</h1>
            </button>
          </div> */}
        {/* </div> */}
        <div className="flex basis-2/12 flex-row justify-between text-white items-center px-10">
          <div className="flex basis-1/3 justify-start">
            <button>
              <div className="flex border-2 rounded-3xl px-8 py-2 hover:scale-105 transition-all font-bold">
                <h1>Save Contact</h1>
              </div>
            </button>
          </div>
          <div className="flex basis-1/3 justify-center items-center">
            <button>
              <div className="flex border-2 rounded-3xl px-8 py-2 hover:scale-105 transition-all font-bold">
                <h1>Message</h1>
              </div>
            </button>
          </div>
          <div className="flex basis-1/3 justify-end">
            <button>
              <div className="flex border-2 rounded-3xl px-8 py-2 hover:scale-105 transition-all font-bold">
                <h1>Call</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNoti;
