import React from "react";
import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";

const App = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/5 bg-[#2C3335] text-white">
          <LeftComponent />
        </div>
        <div className="flex-1">
          <RightComponent />
        </div>
      </div>
    </>
  );
};

export default App;
