
const Categories = () => {
  return (
    <div
      className="relative flex items-center justify-center h-11 rounded-full
        bg-white pr-4 cursor-pointer hover:text-blue-400 transition-colors duration-200"
    >
      <button className="absolute left-1 w-10 h-10 rounded-full bg-blue-500 text-white">
      </button>

      <p
        className="w-full outline-none pl-13 font-medium"
      >
        All Categories
      </p>
    </div>
  );
};

export default Categories;