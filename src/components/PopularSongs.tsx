import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useMediaQuery } from "usehooks-ts";
import { Heart } from "lucide-react";

import { topSongsData } from "../data";

const PopularSongs = () => {
  const matches = useMediaQuery("(min-width: 576px)");

  //ideally should be an optimised db query.
  const mostStreamedSong = topSongsData.reduce((acc, item) => {
    if (acc.streams < item.streams) {
      acc = item;
    }
    return acc;
  }, topSongsData[0]);

  return (
    <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-white/50">Popular Songs</h3>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <p className="text-white/60 text-base font-semibold">
          <span className="text-lg font-bold">{mostStreamedSong.song}</span>
        </p>
        <div className="flex gap-1 items-center">
          <Heart className="size-4 text-white/60" fill="#ffff" />
          <span className="font-semibold">
            {(mostStreamedSong.streams / 1000).toFixed(0)}K
          </span>
        </div>
      </div>

      {/* Popular Songs - Bar Chart*/}
      <ResponsiveContainer
        width="100%"
        height={matches ? 420 : 400}
        className="mt-12 py-4 sm:pr-5"
      >
        <BarChart data={topSongsData}>
          <YAxis
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
            tick={{ fontSize: 15, className: "text-white/50" }}
            tickLine={false}
            axisLine={false}
            interval={0}
          />

          <XAxis dataKey="song" className="hidden" />

          <Tooltip
            itemStyle={{ color: "rgb(255, 255, 255, 0.6)" }}
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
            formatter={(value: number) => [`${value.toLocaleString()} streams`]}
            cursor={false}
          />
          <Bar
            alignmentBaseline="baseline"
            dataKey="streams"
            fill="rgba(0, 170, 255, 0.8)"
            barSize={matches ? 28 : 20}
            radius={[4, 4, 0, 0]}
            animationDuration={500}
            minPointSize={0}
          >
            {topSongsData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                className="drop-shadow-[0px_0px_8px_rgba(0,170,255,0.9)]"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopularSongs;
