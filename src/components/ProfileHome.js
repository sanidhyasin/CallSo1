import React from "react";
import Navbar from "./Navbar";
import { BiHome } from "react-icons/bi";
import ProfileSidebar from "./ProfileSidebar";
import { Link } from "react-router-dom";

const ProfileHome = () => {
  return (
    <div>
      <Link to="/">
        <div className="new flex flex-row item-stretch">
          {/* <div
          className="flex flex-col basis-1/6 m-12 pl-10 pr-10 border-2 rounded-3xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
            <button>Profile</button>
          </div>
          <hr />
          <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
            <button>Contacts</button>
          </div>
          <hr />
          <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
            <button>Messages</button>
          </div>
          <hr />
          <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
            <button>Notifications</button>
          </div>
          <hr />
          <div className="flex flex-col justify-center basis-1/5 m-2 rounded-3xl">
            <div className="flex flex-row justify-center">
              <button className="border-2 px-6 py-2 rounded-3xl">
                <BiHome className="flex text-white" size={50} />
              </button>
            </div>
          </div>
        </div> */}
          <ProfileSidebar />
          <div
            className="flex flex-col basis-5/6 m-12 border-2 rounded-3xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-row basis-1/2 m-6 rounded-3xl">
              <div className="flex basis-1/3 flex-col justify-center">
                <div className="m-6">
                  <img
                    className="border-2 rounded-3xl"
                    src="https://nftsolana.io/wp-content/uploads/2021/12/sbOisxEk_400x400.jpg"
                    // src="https://starsunfolded.com/wp-content/uploads/2021/12/Hasbulla.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row basis-2/3 justify-center align-center">
                <div className="flex flex-col items-center justify-evenly text-white">
                  <div className="flex">
                    <div className="flex font-bold text-2xl">
                      <h1>Home</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div
                      className="border-2 rounded-3xl border-white flex px-16 py-1 hover:scale-110 transition-all"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      <button className="">Oxhv6t743gd87ijd</button>
                    </div>
                  </div>

                  <div className="flex flex-row justify-evenly">
                    <div
                      className="border-2 rounded-3xl border-white flex px-6 py-1 mr-6 hover:scale-110 transition-all"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      Recent calls
                    </div>
                    <div
                      className="border-2 rounded-3xl border-white flex px-6 py-1 ml-6 hover:scale-110 transition-all"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      Messages
                    </div>
                  </div>
                  <div className="flex">
                    <div
                      className="border-2 rounded-3xl border-white flex px-28 py-1 hover:scale-110 transition-all"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      Schedule a call
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-white basis-1/2 m-6 flex-row justify-between items-center">
              <div
                className="flex flex-col basis-1/3 items-center justify-center h-2/3 border-2 border-white rounded-3xl m-4 hover:scale-110 transition-all"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                Wallet Analytics
              </div>
              <div
                className="flex basis-1/3 flex-col items-center justify-center h-2/3 border-2 border-white rounded-3xl m-4 hover:scale-110 transition-all"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                DApp Notifications
              </div>
              <div
                className="flex basis-1/3 flex-col items-center justify-center h-2/3 border-2 border-white rounded-3xl m-4 hover:scale-110 transition-all"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                Mint a Domain
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileHome;
