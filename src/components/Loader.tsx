import { Loader2 as LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-screen h-screen text-center flex items-center justify-center text-white">
      <LoaderIcon className="size-5 animate-spin transition duration-200" />
    </div>
  );
};

export default Loader;
