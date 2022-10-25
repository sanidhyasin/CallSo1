import React from "react";

const ChatCard = () => {
  return (
    <div className="flex flex-row basis-1/6 items-start justify-start w-fit px-2 my-2">
      <div className="flex px-2">
        <div>
          <img src="https://i.imgur.com/rFxCTa3.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col w-4/5">
        <div className="flex text-xs font-extralight text-gray-300">Caesy</div>
        <div
          className="flex border-2 rounded-r-md rounded-bl-md flex-row justify-between"
          // style={{
          //   backgroundColor: "rgba(0, 0, 0, 0.3)",
          // }}
        >
          <div className="px-3 py-2 text-xs flex">
            Hello Guys! Lorem ipsum Hello Guys! Lorem ipsum Hello Guys! Lorem
            ipsum
          </div>
          <div className="px-3 py-2 text-xs font-extralight flex">12:02 pm</div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
