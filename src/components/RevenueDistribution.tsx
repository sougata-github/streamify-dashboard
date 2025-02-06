import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Circle } from "lucide-react";

import { revenueData } from "../data";

const RevenueDistribution = () => {
  const totalRevenue = revenueData.reduce((acc, item) => acc + item.revenue, 0);

  //percentage for each segment
  const revenueDataWithPercentage = revenueData.map((item) => ({
    ...item,
    percentage: ((item.revenue / totalRevenue) * 100).toFixed(2),
  }));

  const pieColors = [
    "rgba(0, 170, 255, 0.8)",
    "rgba(0, 150, 235, 0.8)",
    "rgba(0, 130, 215, 0.8)",
  ];

  return (
    <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-white/50">
          Revenue Distribution
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center md:items-start lg:items-center px-0.5 sm:px-2 mt-2">
        <div className="flex flex-col gap-4 w-full lg:w-[80%] order-2 lg:order-1">
          {revenueDataWithPercentage.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-full justify-between"
            >
              <div className="flex gap-2 items-center">
                <Circle
                  className="size-2 sm:size-2.5"
                  fill="rgba(255,255,255,0.5)"
                  stroke="rgba(255,255,255,0.5)"
                />
                <span className="text-white/60 text-xs sm:text-sm">
                  {item.source}
                </span>
              </div>

              <span className="text-white text-xs sm:text-sm font-medium">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <ResponsiveContainer
          width="100%"
          height={180}
          className="px-0 pb-1 w-full lg:w-[20%] mt-4 lg:mt-0 order-1 lg:order-2"
        >
          <PieChart>
            <Tooltip
              itemStyle={{ color: "rgb(255, 255, 255, 0.6)" }}
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "5px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
              }}
              formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
              cursor={false}
            />
            <Pie
              data={revenueDataWithPercentage}
              dataKey="revenue"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
              stroke="none"
              paddingAngle={2}
              cornerRadius={2}
              animationDuration={500}
            >
              {revenueDataWithPercentage.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                  className="drop-shadow-[0px_0px_8px_rgba(0,170,255,0.9)]"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueDistribution;
