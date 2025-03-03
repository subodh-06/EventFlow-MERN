import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-lg ">
      <input
        type="text"
        placeholder="Search events, locations, or categories..."
        className="w-full px-4 py-2 pl-10 pr-12 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-800"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1FDA8B] text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
        <FiSearch className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
