import React from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const ProfileProfile = () => {
  return (
    <div className="new flex flex-row item-stretch">
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
                <div className="flex font-bold text-3xl">
                  <h1>Choose Avatar</h1>
                </div>
              </div>
              {/* <div className="flex">
                <div
                  className="border-2 rounded-3xl border-white flex px-16 py-1 hover:scale-110 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <button className="">Oxhv6t743gd87ijd</button>
                </div>
              </div> */}

              <div className="flex flex-row justify-evenly mb-16">
                <div
                  className="border-2 rounded-3xl border-white flex px-10 py-4 mr-6 hover:scale-110 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  Select NFT
                </div>
                <div
                  className="border-2 rounded-3xl border-white flex px-10 py-4 ml-6 hover:scale-110 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  Upload Image
                </div>
              </div>
              {/* <div className="flex">
                <div
                  className="border-2 rounded-3xl border-white flex px-28 py-1 hover:scale-110 transition-all"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  Schedule a call
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex text-white basis-1/2 m-6 flex-row justify-between items-center">
          <div className="flex flex-col basis-1/3 bg-gray"></div>
          <div className="flex flex-col items-start justify-start h-full basis-2/3 ">
            <div className="flex flex-row align-center justify-center mb-10">
              <div className="flex font-bold text-2xl">
                <h1 className="">Name:</h1>
              </div>
              <div
                className="border-2 rounded-3xl border-white flex px-6 py-1 ml-8"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <input
                  className="focus:outline-none bg-transparent"
                  type="text"
                  placeholder="Type your name or alias"
                />
              </div>
            </div>
            <div className="flex flex-row align-center justify-center pt-10">
              <div className="font-bold text-2xl">
                <h1>Status:</h1>
              </div>
              <div
                className="border-2 rounded-3xl border-white flex px-6 py-1 ml-6"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <input
                  className="focus:outline-none bg-transparent"
                  type="text"
                  placeholder="What's on your mind?"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProfile;
