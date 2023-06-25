import React from "react";
import Chart from "chart.js";

function Chart1() {
    React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "week 1",
          "week 2",
          "week 3",
          "week 4",
        ],
        datasets: [
          {
            label: "Guest",
            backgroundColor: "#E9A0A0",
            borderColor: "#E9A0A0",
            data: [400,200,310,350],
            fill: false,
            width:"10px",
            height:"10px",
          },
          {
            label: "Users",
            fill: false,
            backgroundColor: "#9BDD7C",
            borderColor: "#9BDD7C",
            data: [250,450,100,450],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "top",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(54, 51, 51, 0.7)",
              },
              display: true,
              scaleLabel: {
                display: true,
                labelString: "weeks",
                fontColor: "black",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(43, 41, 41, 0.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
   <>
     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-[20px] bg-white mt-[2.5rem] h-[360px]">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className=" text-black text-[1.125rem] mb-1  font-[700]">
               Activities
              </h2>
              <h6 className="text-[#858585] text-[0.875rem] font-Montserrat">May - June 2021 </h6>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto  ">
          {/* Chart */}
          <div className="relative h-[250px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
   </>
  )
}

export default Chart1