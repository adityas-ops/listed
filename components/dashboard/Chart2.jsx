import React from 'react'
import Chart from "chart.js";
import { useEffect } from 'react';
const data = {
  datasets: [{
    data: [55, 31, 14],
    backgroundColor: [
      '#98D89E',
      '#F6DC7D',
      '#EE8484'

    ],
    hoverOffset: 4,
    options: {
        maintainAspectRatio: true,
        responsive: true,
    }

  }]
};
function Chart2() {

useEffect(()=>{
    const config = {
  type: 'pie',
  data: data,
    options: {
            datasets: [{}]
    }



};

var ctx = document.getElementById("pie-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
}, [])


  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-[20px] bg-white mt-[2.5rem] h-[16.25rem]">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full  flex justify-between items-center">
              <h2 className=" text-black text-[1.125rem] mb-1  font-[700]">
               Top products
              </h2>
              <h6 className="text-[#858585] text-[0.875rem] font-Montserrat">May - June 2021 </h6>
            </div>
          </div>
        </div>
        <div className="p-2 pt-1 w-full flex justify-start relative  ">
          {/* Chart */}
          <div className="relative flex items-center justify-start ">
          <canvas className='m-0 p-0 flex '  id="pie-chart"/>
          </div>
          <div className='absolute top-2 right-4'>
            <div className="flex items-start">
                <div className='w-[10px] h-[10px] rounded-[50%] bg-[#98D89E] mr-3 mt-2'/>
                <p className='text-[14px] text-black font-Montserrat font-[700]'>Basic Tees <br/> <span className='text-[12px] font-Lato text-[#858585'>55%</span></p>
            </div>
            <div className="flex items-start mt-[1rem]">
                <div className='w-[10px] h-[10px] rounded-[50%] bg-[#F6DC7D] mr-3 mt-2'/>
                <p className='text-[14px] text-black font-Montserrat font-[700]'>Custom Short Pants <br/> <span className='text-[12px] font-Lato text-[#858585'>31%</span></p>
            </div>
            <div className="flex items-start mt-[1rem]">
                <div className='w-[10px] h-[10px] rounded-[50%] bg-[#EE8484] mr-3 mt-2'/>
                <p className='text-[14px] text-black font-Montserrat font-[700]'>Super Hoodies <br/> <span className='text-[12px] font-Lato text-[#858585'>14%</span></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Chart2