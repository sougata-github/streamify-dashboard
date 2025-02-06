import { useSearchParams } from "react-router-dom";

const StreamSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "date"; // Default sorting

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("sort", event.target.value);
    setSearchParams(searchParams); // Update URL
  };

  return (
    <div className="bg-white/10 p-2 rounded-lg">
      <label className="text-sm font-medium text-gray-300">Sort By</label>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="bg-transparent border-none outline-white/20 outline-1 rounded-md p-1 text-white ml-2 text-sm"
      >
        <option value="date">Date</option>
        <option value="streamCount">Stream Count</option>
      </select>
    </div>
  );
};

export default StreamSort;
