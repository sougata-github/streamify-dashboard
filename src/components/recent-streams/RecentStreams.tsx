import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import { recentStreamsColumns, recentStreamsData } from "../../data";
import StreamFilter from "./StreamFilter";
import StreamSort from "./StreamSort";
import { Table } from "./Table";

const RecentStreams = () => {
  const [searchParams] = useSearchParams();

  // Get current search parameters
  const sort = searchParams.get("sort") || "date";
  const filter = searchParams.get("filter") || "";

  // Memoized filtered data
  const filteredData = useMemo(() => {
    if (filter) {
      return recentStreamsData.filter(
        (stream) => stream.artist.toLowerCase() === filter.toLowerCase()
      );
    }
    return recentStreamsData;
  }, [filter]);

  // Memoized sorted data
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (sort === "streamCount") {
        return b.streamCount - a.streamCount;
      }
      return (
        new Date(b.dateStreamed).getTime() - new Date(a.dateStreamed).getTime()
      );
    });
  }, [sort, filteredData]);

  return (
    <div className="p-6 rounded-xl backdrop-blur-lg bg-white/5">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4 md:gap-0">
          <h3 className="text-base font-semibold text-white/50">
            Recent Streams
          </h3>
          <div className="flex items-center gap-4">
            <StreamFilter />
            <StreamSort />
          </div>
        </div>
        {/* Table */}
        <Table data={sortedData} columns={recentStreamsColumns} />
      </div>
    </div>
  );
};

export default RecentStreams;
