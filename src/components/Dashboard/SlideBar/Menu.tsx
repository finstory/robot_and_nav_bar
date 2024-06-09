import React from "react";
import { ItemMenu } from "./ItemMenu";
import { IoMdHome } from "react-icons/io";
import { AiOutlineNumber } from "react-icons/ai";
export const Menu = () => {
  const itemsList = [
    {
      path: "/dashboard",
      icon: <IoMdHome size={30} />,
      title: "Dashboard",
      subtitle: "go to dashboard",
    },
    {
      path: "/dashboard/counter",
      icon: <AiOutlineNumber size={30} />,
      title: "Counter",
      subtitle: "go to counter",
    },
  ];

  return (
    <div id="nav" className="w-full px-6">
      {itemsList.map((item) => (
        <ItemMenu key={item.path} {...item} />
      ))}
    </div>
  );
};
