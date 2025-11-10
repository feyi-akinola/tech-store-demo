import SearchIcon from "../assets/svg/search.svg?react";

const SearchBar = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full rounded-full ml-12
        ring-2 ring-gray-300 hover:ring-blue-500 hover:shadow-lg shadow-blue-100 transition-all duration-300"
    >
      <input
        type="text"
        placeholder="Search for products"
        className="w-full outline-none px-6 text-gray-500 font-medium text-lg"
      >
      </input>

      <div
        className="absolute right-1 w-10 h-10 rounded-full bg-blue-500
          text-white flex items-center justify-center cursor-pointer"
      >
        <SearchIcon className="w-5 h-5 fill-white" />
      </div>
    </div>
  );
};

export default SearchBar;