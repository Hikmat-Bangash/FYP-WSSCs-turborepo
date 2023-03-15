"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import user from "../public/user.jpg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [windowActive, setWindowActive] = useState(false);
  return (
    <div className="flex items-center justify-between bg-gray-50 w-full px-3 py-2 border-1 shadow-md md:shadow-lg fixed top-0 border z-30">
      <div className="flex items-center justify-center gap-2">
        <Link href="/">
          <Image src="/wsscmlogo.png" height={40} width={40} alt="" />
        </Link>
        <h2 className="text-lg text-primaryColor-500 font-bold">WSSCM</h2>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="notification flex relative">
          <BsFillBellFill
            className="text-[26px] text-primaryColor-500"
            onClick={() => setWindowActive(!windowActive)}
          />
          {/* notification indicator */}


          <div className="absolute right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-95"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>

          </div>
        </div>

        <Image
          src={user}
          className="w-8 rounded-full"
          alt="profileIcon"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
      {/* Notification window */}
      <div
        className={`flex flex-col z-50 absolute top-12 right-3 w-2/3 transform transition-transform p-4 border-2 border-gray-300 bg-white shad rounded-lg ${
          windowActive ? "-translate-x-0" : "translate-x-72"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-500">Notifications</span>
          <GrFormClose
            className="text-2xl"
            onClick={() => setWindowActive(!windowActive)}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-2">
            <div className="flex flex-col">
              <p className="text-[10px] text-gray-500">
                ID: <span>WSSC3457</span>
              </p>
              <span className="text-sm font-bold text-headingColor-400">
                Waste Water
              </span>
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-bold text-gray-400 text-right text-[12px]">
                08:12 am
              </span>
              <span className="text-inprogessColor">InProgess</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <p className="text-[10px] text-gray-500">
                ID: <span>WSSC3987</span>
              </p>
              <span className="text-sm font-bold text-headingColor-400">
                Solid Waste
              </span>
            </div>
            <div className="flex flex-col text-sm">
              <span className="font-bold text-gray-400 text-right text-[12px]">
                08:12 am
              </span>
              <span className="text-completedColor">Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Menu */}
      <div
        className={`z-50 absolute top-0 left-0 transform transition-transform ${
          menuActive ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        <ProfileMenu />
      </div>

      {/* Overlay to profile menu */}
      {menuActive ? (
        <div
          onClick={() => {
            setMenuActive(false);
            setWindowActive(false);
          }}
          className="absolute top-0 left-0 bottom-0 right-0 h-[100vh] w-[100vw] bg-gray-500 opacity-25 z-30"
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;