import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiHome, BiMailSend, BiUser } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import { TiMessageTyping } from "react-icons/ti";
import { FaRegAddressBook, FaRegUser, FaUser } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { MdOutlineNotificationsActive } from "react-icons/md";
import MssgChatCard from "../components/message/MssgChatCard";

const messagechat = () => {
  return (
    <div className="new flex flex-row item-stretch">
      <div
        className="flex flex-col basis-1/12 my-12 ml-6 pl-5 pr-5 border-2 rounded-l-3xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <FaRegUser size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <FaRegAddressBook size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <BiMailSend size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col text-white justify-center basis-1/5 rounded-3xl">
          <button className="flex flex-col hover:scale-110 hover:border-2 rounded-3xl transition-transform items-center justify-center">
            <div className="flex">
              <MdOutlineNotificationsActive size={35} />
            </div>
          </button>
        </div>
        <hr />
        <div className="flex flex-col justify-center basis-1/5 rounded-3xl">
          <div className="flex flex-row justify-center">
            <button className="border-2 px-6 py-2 rounded-3xl hover:scale-110 transition-all">
              <BiHome className="flex text-white" size={50} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex basis-3/12 flex-col my-12 border-y-2 border-r-2"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-row items-center justify-center basis-2/12 font-bold text-2xl text-white">
          Chat
        </div>
        <div
          className="flex flex-col px-2 h-full overflow-auto"
          style={{
            display: "flex",
          }}
        >
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
          <MssgChatCard />
        </div>
      </div>
      <div
        className="flex flex-col basis-5/12 text-white my-12 mr-4 p-8 border-y-2 border-r-2 rounded-r-3xl"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex basis-1/12 flex-row items-center h-full">
          <div className="flex">
            <img
              className="w-10 h-10 border-2 rounded-3xl mr-5"
              src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
              alt=""
            />
          </div>
          <div className="flex font-bold text-2xl text-white">Jacob.nft</div>
        </div>
        <div className="flex basis-9/12 text-white py-10 flex-col overflow-auto">
          <div className="grid grid-rows-6 gap-4">
            <div className="flex items-center justify-center text-sm font-bold text-gray-400 mb-2">
              Monday, October 7th at 11:30 AM
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex mr-4">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src="https://i.seadn.io/gae/QaUEEdi_R3P5VKKNSbjNlfDkqkAP4ywS3YoGQvfhJOaRwyNbtM4PoNpuUj0OjUNk4glBofYNASrQAcRWTyk4KSiJ5RvbrxmyeZX6rw?auto=format&w=1000"
                  alt=""
                />
              </div>
              <div className="flex border-2 rounded-3xl w-fit px-4 py-2 text-sm">
                hello my name is sanidhya
              </div>
            </div>
          </div>
        </div>
        <div className="flex basis-2/12 flex-col justify-evenly">
          <div className="flex flex-row text-gray-400 items-end">
            <div className="flex">
              <TiMessageTyping size={25} />
            </div>
            <div className="flex text-sm">Jacob is typing</div>
          </div>
          <div
            className="flex rounded-2xl h-14"
            style={{
              backgroundColor: "rgba(255, 255, 250, 0.1)",
            }}
          >
            <div className="flex flex-col items-center justify-center basis-1/6 ">
              <div className="flex text-gray-300">
                <BsImageFill size={30} />
              </div>
            </div>
            <div className="flex basis-4/6 border-l-2 px-4 my-3">
              <input
                className="outline-none bg-transparent"
                type="text"
                placeholder="Write message here"
              />
            </div>
            <div className="flex basis-1/6 flex-col items-center justify-center">
              <div
                className="flex flex-col items-center justify-center rounded-3xl"
                style={{
                  backgroundColor: "rgba(117, 117, 117, 0.64)",
                }}
              >
                <div className=" flex px-2 py-1 text-white">
                  <AiOutlineSend size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col basis-3/12 border-2 rounded-3xl my-12 mr-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      >
        <div className="flex text-white basis-1/6 h-full flex-row justify-evenly items-end pb-4 border-b-2">
          <div className="flex font-bold text-xl">Mutual Tokens</div>
          <div className="flex font-bold text-xl">Shared Files</div>
        </div>
        <div className="flex basis-2/6 px-4 flex-col justify-evenly">
          <div className="flex text-gray-400 font-bold text-lg">ADMINS</div>
          <div className=" grid grid-cols-4 gap-4">
            <div className="flex w-14 h-14">
              <img
                className="border-2 rounded-2xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
            <div className="flex w-14 h-14">
              <img
                className="border-2 rounded-2xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
            <div className="flex w-14 h-14">
              <img
                className="border-2 rounded-2xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
            <div className="flex w-14 h-14">
              <img
                className="border-2 rounded-2xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
            <div className="flex w-14 h-14">
              <img
                className="border-2 rounded-2xl"
                src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex basis-3/6 flex-col px-4 text-white h-1/2">
          <div className="flex text-lg font-bold text-gray-400 mb-2">
            TOKENS
          </div>
          <div className="grid grid-cols-1 gap-2 overflow-auto">
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row mt-2">
              <div className="flex w-14 mr-3">
                <img
                  className="border-2 rounded-3xl"
                  src="https://www.arweave.net/0_n87p4nNyAUIe8ajXrOPMjriV1cDWzQi3TEYcafRkI?ext=jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="flex font-bold">Moonbirds</div>
                <div className="flex font-extralight text-sm">Investor</div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default messagechat;
