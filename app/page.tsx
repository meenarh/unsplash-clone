import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-200 w-full h-64 items-center text-center">
        <div className="relative">
          <button>
          <IoIosSearch className="absolute top-[85px] left-[160px] text-gray-600" size={20} />
          </button>
          <input
            type="search"
            placeholder="Search for photo"
            className="bg-white w-[80%] h-14 my-[68px] px-12 py-5 border border-white rounded-lg outline-none placeholder:text-gray-600"
          />
        </div>
        <div className="grid grid-rows-3">
          
        </div>
      </div>
    </div>
  );
}
