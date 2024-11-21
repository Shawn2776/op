import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DatePicker } from "./DatePicker";

const SearchInput = () => {
  return (
    <div>
      <h2 className="text-center text-[20px] text-gray-400 mb-4 mt-5">
        Plan Your Next Adventure
      </h2>
      <div className="flex gap-24 justify-center">
        <div className="flex bg-gray-100 gap-10 divide-x-2 p-2 px-5 rounded-full">
          {/* Location Input */}
          <div className="flex items-center">
            <IoLocationSharp className="text-gray-500" size={25} />
            <Input
              type="text"
              placeholder="Location"
              className="pl-10 p-2 outline-none bg-white"
            />
          </div>
          <div className="flex items-center gap-2 pl-10">
            {/* <FaRegCalendarAlt className="text-gray-500" size={20} /> */}
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
