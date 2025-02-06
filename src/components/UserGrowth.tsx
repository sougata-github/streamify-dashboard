import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ArrowUp } from "lucide-react";

import { userGrowthData } from "../data";

const UserGrowth = () => {
  //calculations
  const firstDataPoint = userGrowthData[0].totalUsers;
  const lastDataPoint = userGrowthData[userGrowthData.length - 1].totalUsers;
  const overallPercentageChange =
    ((lastDataPoint - firstDataPoint) / firstDataPoint) * 100;
  const increase = overallPercentageChange > 0;

  return (
    <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-white/50">User Growth</h3>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <p className="text-white/60 text-base font-semibold">
          <span className="text-lg font-bold">
            {increase ? "Increase" : "Decrease"}
          </span>
        </p>
        <div className="flex gap-1 items-center">
          <span className="font-semibold">{overallPercentageChange}%</span>
          <ArrowUp className="size-4 text-white/60" />
        </div>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer
        width="100%"
        height={180}
        className="mt-8 md:mt-18 lg:mt-8 pt-2"
      >
        <LineChart data={userGrowthData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value}
            tick={{ fontSize: 14, className: "text-white/50" }}
            interval={0}
            className="opacity-0 sm:opacity-100 md:opacity-0 lg:opacity-100"
          />

          <Line
            type="natural"
            dataKey="totalUsers"
            stroke="rgba(0, 170, 255, 0.8)"
            strokeWidth={2.5}
            dot={false}
            animationDuration={500}
            className="drop-shadow-[0px_0px_8px_rgba(0,170,255,0.9)]"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
            itemStyle={{
              color: "white",
            }}
            cursor={false}
            formatter={(value) => [`${value.toLocaleString()}`]}
            labelFormatter={(label) => label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowth;
