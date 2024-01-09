import React from "react";
import orders from "../data/orders";

const Transactions = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl p-2">transactions | this month</h2>
      <div className="flex mt-2 bg-white p-2">
        <input type="text" className="p-1" placeholder="search by order id" />
        <p className="px-2 ml-auto">sort</p>
        <p>
          <i class="fa-solid fa-download"></i>
        </p>
      </div>
      <div className="flex  justify-between pt-4 pb-4">
        <p className="font-bold pl-2">orderId</p>
        <p className="font-bold pl-24">orderDate</p>
        <p className="font-bold pl-8">orderAmount</p>
        <p className="font-bold">transactionFees</p>
      </div>
      <div className="bg-white">
        {orders.map((i) => (
          <div className="flex p-2 justify-between">
            <p>{i.orderId}</p>
            <p>{i.orderDate}</p>
            <p>{i.orderAmount}</p>
            <p>{i.transactionFees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
