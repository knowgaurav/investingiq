import React from "react";
import * as Icon from "react-feather";

const ListCard = ({ item, buttonTitle, icon }) => {
  return (
    <div className="grid grid-cols-4 w-full items-center py-4">
      <div className="font-medium flex items-center gap-3">
        <img alt="stock" src={item.image} className="w-10 h-10" />
        <div>
          <div className="text-xs text-gray-500 italic">Name:</div>
          {item.name}
        </div>
      </div>
      <div className="font-medium">
        <div className="text-xs text-gray-500 italic">Symbol:</div>
        {item.symbol}
      </div>
      <div className="font-medium">
        <div className="text-xs text-gray-500 italic">Price:</div>
        {item.price}
      </div>
      <button className="border w-fit bg-white text-xs py-1.5 px-2 rounded-md font-medium flex items-center gap-1 text-gray-400 hover:text-black">
        <Icon.PlusCircle size={15} />
        {buttonTitle}
      </button>
    </div>
  );
};

export default ListCard;
