import MenuIcon from "../assets/svg/menu.svg?react";

const Categories = () => {
  return (
    <div
      className="relative flex items-center justify-center h-11 rounded-full
        bg-white pr-4 cursor-pointer hover:text-blue-400 transition-colors
        duration-200"
    >
      <div className="absolute group left-1 w-10 h-10 rounded-full bg-blue-500
        text-white flex items-center justify-center">
        <MenuIcon
          className="w-5 h-5 fill-white"
        />
      </div>

      <p
        className="w-full outline-none pl-13 font-medium"
      >
        All Categories
      </p>
    </div>
  );
};

export default Categories;