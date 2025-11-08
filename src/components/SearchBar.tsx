
const SearchBar = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-11 rounded-full
        ring-1 ring-gray-300 ml-12"
    >
      <input
        type="text"
        placeholder="Search for products"
        className="w-full outline-none px-4 text-gray-500 font-medium"
      >
      </input>

      <button className="absolute right-1 w-10 h-10 rounded-full bg-blue-500 text-white">
      </button>
    </div>
  );
};

export default SearchBar;