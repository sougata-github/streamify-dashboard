import { useSearchParams } from "react-router-dom";

const artists = [
  "Luna Wave",
  "Echo Pulse",
  "Synth Horizon",
  "Nova Beats",
  "Harmonic Flow",
];

const StreamFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter") || "";

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "") {
      searchParams.delete("filter");
    } else {
      searchParams.set("filter", event.target.value);
    }
    setSearchParams(searchParams); // Update URL
  };

  return (
    <div className="bg-white/10 p-2 rounded-lg sm:pl-2.5">
      <label className="text-sm font-medium text-gray-300">
        Filter by Artist
      </label>
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="max-sm:mt-2.5 bg-transparent border-none outline-white/20 outline-1 rounded-md p-1 text-white sm:ml-2 text-sm"
      >
        <option value="">All Artists</option>
        {artists.map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StreamFilter;
