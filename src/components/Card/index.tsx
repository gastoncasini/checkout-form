import React from "react";
import { ReactComponent as Visalogo } from "../../assets/visa.svg";

function Card(): JSX.Element {
  return (
    <div className="shadow-lg justify-between rounded-lg h-32 w-8/12 mx-auto mb-4 h-30 bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col">
      <div className="w-12 h-12 self-end mr-4">
        <Visalogo />
      </div>

      <div className=" text-white ml-2 mb-2 ">
        <p className="tracking-widest">4500725******4567</p>
        <p className="tracking-widest">Demo user</p>
      </div>
    </div>
  );
}

export default Card;
