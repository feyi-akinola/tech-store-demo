import type { Category } from "../sections/PopularCategoriesSection";

interface PopularCategoryProps {
  category: Category;
}

const PopularCategory = ({ category }: PopularCategoryProps) => {
  const { title, image, quantity } = category;

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-1
      group cursor-pointer">
      <img 
        src={(image)} 
        alt={title}
        className="w-full h-[35%] object-contain group-hover:scale-110
          transition-transform duration-300"
      />

      <p
        className="mt-4 text-xl font-semibold group-hover:text-blue-500
          transition-colors duration-200"
      >
        {title}
      </p>

      <p
        className="text-lg font-semibold text-black/40
          group-hover:text-blue-400 transition-colors duration-200"
      >
        {`${quantity} products`}
      </p>
    </div>
  )
}

export default PopularCategory