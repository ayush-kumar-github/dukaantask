import React from "react";
import Transactions from "./Transactions";

const rightComponent = () => {
  return (
    <div className="bg-[#EAF0F1]">
      <div className="flex p-3 items-center justify-between bg-white">
        <p>payment</p>
        <p className="">? How it works</p>
        <div class="">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="search features"
          />
        </div>
        <div className="">
          <i class="fa-solid fa-podcast p-2"></i>
          <i class="fa-solid fa-arrow-down p-2"></i>
        </div>
      </div>
      <div>
        <p className=" text-2xl py-3 px-3 bg-[#EAF0F1]">overview</p>
        <div className="flex p-3 gap-2">
          <div className="bg-white w-[50%] p-3">
            <p>online order</p>
            <p className="font-bold text-3xl pt-4">231</p>
          </div>
          <div className="bg-white w-[50%] p-3">
            <p>amount received</p>
            <p className="font-bold text-3xl pt-4">Rs 234,323</p>
          </div>
        </div>
      </div>
      <Transactions />
    </div>
  );
};

export default rightComponent;
