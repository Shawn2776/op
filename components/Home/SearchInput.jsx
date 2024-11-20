import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div>
      <h2 className="text-center text-[20px] text-gray-400 mb-4">
        Plan Your Next Adventure
      </h2>
      <div className="flex gap-10 justify-center">
        <div className="flex items-center gap-2">
          <IoLocationSharp size={30} className="text-gray-400" />
          <Input
            type="text"
            placeholder="Location"
            className="p-2 outline-none bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt size={30} className="text-gray-400" />
          <Input
            type="date"
            className="p-2 outline-none bg-white text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
