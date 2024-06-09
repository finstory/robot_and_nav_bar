import Image from "next/image";
import React from "react";
import { Menu } from "./Menu";

export default function SlideBar() {
  return (
    <nav
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen  "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="profile image"
              width={40}
              height={40}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <Menu />
    </nav>
  );
}
