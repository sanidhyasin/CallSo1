import React from "react";
import { BiHome } from "react-icons/bi";

const ProfileSidebar = () => {
  return (
    <div
      className="flex flex-col basis-1/6 m-12 pl-10 pr-10 border-2 rounded-3xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
        <button className="hover:scale-110 hover:border-2 rounded-3xl transition-transform">
          Profile
        </button>
      </div>
      <hr />
      <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
        <button className="hover:scale-110 hover:border-2 rounded-3xl transition-transform">
          Contacts
        </button>
      </div>
      <hr />
      <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
        <button className="hover:scale-110 hover:border-2 rounded-3xl transition-transform">
          Messages
        </button>
      </div>
      <hr />
      <div className="flex flex-col text-white justify-center basis-1/5 m-2 rounded-3xl">
        <button className="hover:scale-110 hover:border-2 rounded-3xl transition-transform">
          Notifications
        </button>
      </div>
      <hr />
      <div className="flex flex-col justify-center basis-1/5 m-2 rounded-3xl">
        <div className="flex flex-row justify-center">
          <button className="border-2 px-6 py-2 rounded-3xl hover:scale-110 transition-all">
            <BiHome className="flex text-white" size={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
