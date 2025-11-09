import { useState } from "react";

interface SelectorsProps {
  text: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Selectors = ({ text, options, onSelect }: SelectorsProps) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);

  const toggleOverlay = () => setIsOverlayShown(!isOverlayShown);

  return (
    <div
      className="relative cursor-pointer group"
      onMouseEnter={toggleOverlay}
      onMouseLeave={toggleOverlay}
    >
      <p className="text-lg group-hover:text-blue-500 transition-all
        duration-300"
      >
        {text}
      </p>

      {
        isOverlayShown && (
          <div
            className="absolute px-6 py-3 top-6 bg-white rounded-lg ring-1
              ring-gray-100 shadow-2xl flex flex-col gap-4 z-10 text-lg"
          >
            {
              options.map((option, index) => (
                <p 
                  key={index} 
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => {toggleOverlay(); onSelect(option);}}
                >
                  {option}
                </p>
              ))}
          </div>
        )
      }
    </div>
  );
};

export default Selectors;