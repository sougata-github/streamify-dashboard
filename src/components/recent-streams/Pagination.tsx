import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = (searchParams.get("page") || "1").trim();

  const handlePageClick = (direction: "next" | "prev") => {
    const nextPage =
      direction === "prev"
        ? parseInt(currentPage) - 1
        : parseInt(currentPage) + 1;

    searchParams.set("page", nextPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full my-2 flex gap-4 justify-end pr-4">
      <button
        className="rounded-lg py-2 px-4 bg-white/20 cursor-pointer hover:bg-white/10 transition-all w-fit disabled:hover:bg-white-10 disabled:bg-white/10"
        disabled={parseInt(currentPage) === 1}
        onClick={() => handlePageClick("prev")}
      >
        <ChevronLeft className="size-4 text-white/60" />
      </button>
      <button
        className="rounded-lg py-2 px-4 bg-white/20 cursor-pointer hover:bg-white/10 transition-all w-fit disabled:hover:bg-white-10 disabled:bg-white/10"
        disabled={parseInt(currentPage) === totalPages}
        onClick={() => handlePageClick("next")}
      >
        <ChevronRight className="size-4 text-white/60" />
      </button>
    </div>
  );
};

export default Pagination;
