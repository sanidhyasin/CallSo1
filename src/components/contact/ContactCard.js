import React from "react";

const ContactCard = () => {
  return (
    <div className="flex basis-1/4 flex-row text-white items-center justify-center pb-10">
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
    </div>
  );
};

export default ContactCard;
