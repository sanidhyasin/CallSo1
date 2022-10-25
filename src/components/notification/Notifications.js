import React from "react";
import ProfileSidebar from "../ProfileSidebar";
import NotiCard from "./NotiCard";

const Notifications = () => {
  return (
    <div className="new flex flex-row item-stretch overflow-auto">
      <ProfileSidebar />
      <div
        className="flex flex-col basis-5/6 m-12 border-2 rounded-l-3xl pb-10 pt-10 overflow-auto text-white"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-row basis-2/12 justify-center items-center text-white text-3xl font-bold">
          <h1>Notifications</h1>
        </div>
        {/* <div className="flex basis-2/12 flex-row items-center justify-center my-4">
          <div className="flex basis-2/12 items-center justify-center">
            <div className="flex w-28 ">
              <img
                className="border-2 rounded-3xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
          </div>
          <div
            className="flex basis-8/12 items-center justify-center border-2 rounded-3xl py-2 mx-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="flex">
              <h1>You have a missed call form 6969.eth</h1>
            </div>
          </div>
          <div
            className="flex basis-2/12 items-center justify-center border-2 rounded-3xl py-2 mx-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="flex">Call</div>
          </div>
        </div> */}
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
        <NotiCard />
      </div>
    </div>
  );
};

export default Notifications;
