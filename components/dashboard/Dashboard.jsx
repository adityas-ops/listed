import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

const items = [
  {
    title: "Dashboard",
    icon: "/images/dashboard-icon.svg",
    link: "/dashboard",
  },
  {
    title: "Transcations",
    icon: "/images/transaction-icon.svg",
    link: "/",
  },
  {
    title: "Schedules",
    icon: "/images/schedule-icon.svg",
    link: "/",
  },
  {
    title: "Users",
    icon: "/images/user-icon.svg",
    link: "/",
  },
  {
    title: "Settings",
    icon: "/images/setting-icon.svg",
    link: "/",
  },
];

const cardItems = [
  {
    title: "Total Revenues",
    amount: "$2,129,430",
    color: "#DDEFE0",
    icon: "/images/revenue.svg",
  },
  {
    title: "Total Transactions",
    amount: "1,520",
    color: "#F4ECDD",
    icon: "/images/total-transactions-icon.svg",
  },
  {
    title: "Total Likes",
    amount: "9,721",
    color: "#EFDADA",
    icon: "/images/like.svg",
  },
  {
    title: "Total Users",
    amount: "892",
    color: "#DEE0EF",
    icon: "/images/users.svg",
  },
];

function Dashboard({ session }) {
  return (
    <div className="w-screen h-fit  min-h-screen relative ">
      <div className="w-full h-full p-[2.5rem] flex">
        <div className="w-[280px]  bg-black rounded-[30px] relative">
          <div className=" text-white  px-[3.125rem] mt-[50px]">
            <p className="text-[#fff] text-[2.25rem] font-[700] font-Montserrat m-0 p-0">
              Board.
            </p>
            <div className="h-full  w-full pt-[2.5rem] flex flex-col ">
              <div className="w-full h-full flex-[80%] flex flex-col items-start justify-start">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="w-full pb-[2.5rem] flex items-center justify-start"
                  >
                    <div
                      className={`flex items-center text-[#fff] text-[1.125rem] font-Montserrat  ${
                        item.link == "/dashboard" ? " font-semibold" : ""
                      }`}
                    >
                      <Image
                        src={item.icon}
                        width={18}
                        height={18}
                        alt={item.title}
                        className="mr-[1.25rem]"
                      />
                      <span>{item.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-[3.125rem]">
                <div className="flex flex-col text-[0.875rem] font-Montserrat">
                  <Link href="#">Help</Link>
                  <Link href="#" className="pt-[1.25rem]">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  second section */}
        <div className="w-[80%] h-full">
          <div className="  pl-[3.75rem] pt-[1.25rem] w-full h-full">
            <div className="w-full flex justify-between">
              <p className="text-[#000] text-[1.5rem] font-Montserrat font-[700]">
                Dashboard
              </p>
              <div className="flex items-center">
                <div className="w-[11.25rem] h-[1.875rem] relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-full outline-none border-none font-Lato text-[14px] py-[6px] pl-3 rounded-[10px] text-black placeholder-[#B0B0B0 ]"
                  />
                  <Image
                    src="/images/search-icon.svg"
                    alt="search"
                    width={13}
                    height={12}
                    className="absolute right-[8%] top-[36%]"
                  />
                </div>
                <Link href="#">
                  <Image
                    className="ml-[1.875rem]"
                    src="/images/bell.svg"
                    width={18}
                    height={20}
                    alt="bell"
                  />
                </Link>
                <Link href="#">
                  <img
                    src={session.user.image}
                    width={30}
                    height={30}
                    alt="profile"
                    className="rounded-[50%] ml-[1.875rem]"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-[2.5rem] w-full h-fit grid grid-cols-4 gap-6">
              {/* cards */}
              <div className="bg-[#DDEFE0] xl:w-[13.75rem] w-[full] h-[7.5rem] p-9   px-[1.5rem] py-[1.25rem] rounded-[20px]">
                <div className="w-full flex justify-end">
                  <Image
                    src="/images/revenue.svg"
                    width={24}
                    height={24}
                    alt="revenue"
                    // className='w-[20px] h-[24px]'
                  />
                </div>
                <p className="text-[0.875rem] font-Lato">Total Revenues</p>
                <p className="lg:text-[1.5rem]  text-[1rem] font-[700] font-sans mt-[5px]">
                  $2,129,430
                </p>
              </div>
              {/* cards */}
              <div className="bg-[#F4ECDD] xl:w-[13.75rem] w-[full] h-[7.5rem] p-9   px-[1.5rem] py-[1.25rem] rounded-[20px]">
                <div className="w-full flex justify-end">
                  <Image
                    src="/images/total-transactions-icon.svg"
                    width={24}
                    height={24}
                    alt="revenue"
                    // className='w-[20px] h-[24px]'
                  />
                </div>
                <p className="text-[0.875rem] font-Lato">Total Transactions</p>
                <p className="lg:text-[1.5rem]  text-[1rem] font-[700] font-sans mt-[5px]">
                1,520
                </p>
              </div>
              {/* cards */}
              <div className="bg-[#EFDADA] xl:w-[13.75rem] w-[full] h-[7.5rem] p-9   px-[1.5rem] py-[1.25rem] rounded-[20px]">
                <div className="w-full flex justify-end">
                  <Image
                    src="/images/like.svg"
                    width={24}
                    height={24}
                    alt="revenue"
                    // className='w-[20px] h-[24px]'
                  />
                </div>
                <p className="text-[0.875rem] font-Lato">Total Likes</p>
                <p className="lg:text-[1.5rem]  text-[1rem] font-[700] font-sans mt-[5px]">
                9,721
                </p>
              </div>
              {/* cards */}
              <div className="bg-[#DEE0EF] xl:w-[13.75rem] w-[full] h-[7.5rem] p-9   px-[1.5rem] py-[1.25rem] rounded-[20px]">
                <div className="w-full flex justify-end">
                  <Image
                    src="/images/users.svg"
                    width={28}
                    height={28}
                    alt="revenue"
                    // className='w-[20px] h-[24px]'
                  />
                </div>
                <p className="text-[0.875rem] font-Lato">Total Users</p>
                <p className="lg:text-[1.5rem]  text-[1rem] font-[700] font-sans mt-[5px]">
                892
                </p>
              </div>
            </div>
            {/*  chart starts */}
           <div className="h-fit">
           <Chart1/>
           </div>
           <div className="flex justify-between">
           <div className="w-[45%] h-fit">
            <Chart2/>
           </div>
           <div className="w-[45%] h-fit">
           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-[20px] bg-white mt-[2.5rem] h-[16.25rem]">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full  flex justify-between items-center">
              <h2 className=" text-black text-[1.125rem] mb-1  font-[700]">
               Today Shedules
              </h2>
              <h6 className="text-[#858585] text-[0.875rem] font-Montserrat">see all {'>'} </h6>
            </div>
          </div>
        </div>
        <div className="p-4 px-8 pt-1 w-full flex flex-col md:flex-row flex-wrap  text-black">
        <div className="w-full h-[66px] flex">
                      <div className="bg-[#9BDD7C] flex-[1%] w-[1%] h-full"/>
                      <div className="flex-[99%] w-[99%] h-full px-4">
                        <p className="text-[#666] text-[14px] font-Lato font-[700]">Meeting with suppliers from Kuta Bali</p>
                        <p className="text-[12px] font-Lato text-[#999] mt-[5px]">14.00-15.00</p>
                        <p className="font-lato text-[#999] text-[12px] mt-[5px]">at Sunset Road, Kuta, Bali </p>
                      </div>
        </div>
        <div className="w-full h-[66px] flex mt-[14px]">
                      <div className="bg-[#6972C3] flex-[1%] w-[1%] h-full"/>
                      <div className="flex-[99%] w-[99%] h-full px-4">
                        <p className="text-[#666] text-[14px] font-Lato font-[700]">Meeting with suppliers from Kuta Bali</p>
                        <p className="text-[12px] font-Lato text-[#999] mt-[5px]">18.00-20.00</p>
                        <p className="font-lato text-[#999] text-[12px] mt-[5px]">at Central Jakarta  </p>
                      </div>
        </div>
        </div>
      </div>
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
