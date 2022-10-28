import React from "react";

const MssgChatCard = () => {
  return (
    <div className="flex flex-row">
      <div className="flex basis-2/12 items-center justify-center h-20">
        <img
          className="border-2 rounded-3xl"
          src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col basis-9/12 pl-2 justify-between py-3">
        <div className="flex">
          <div className="flex font-bold text-white text-lg">jacob.nft</div>
        </div>
        <div className="flex">
          <div className="flex text-sm text-gray-400">You: Ui incoming</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end basis-1/12 text-gray-400 py-3">
        4h
      </div>
    </div>
  );
};

export default MssgChatCard;
