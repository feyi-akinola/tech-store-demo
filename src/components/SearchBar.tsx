

const SearchBar = () => {
  return (
    <div
      className="relative flex items-center justify-center w-[400px] h-12 rounded-full ring-1 ring-gray-400"
    >
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full outline-none px-4"
      >

      </input>
      <button className="absolute right-0 w-12 h-12 rounded-full bg-blue-500 text-white">
        
      </button>
    </div>
  );
};

export default SearchBar;