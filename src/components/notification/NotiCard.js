import React from "react";

const NotiCard = () => {
  return (
    <div className="flex basis-2/12 flex-row items-center justify-center my-4">
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
    </div>
  );
};

export default NotiCard;
