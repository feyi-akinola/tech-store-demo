import PopularCategory from "../components/PopularCategory";

export interface Category {
  title: string;
  image: string;
  quantity: number;
}

const PopularCategoriesSection = () => {
  const categories: Category[] = [
    {
      title: "Smartphones",
      image: "/images/categories/phone.png",
      quantity: 8,
    },
    {
      title: "Laptops",
      image: "/images/categories/laptop.png",
      quantity: 8,
    },
    {
      title: "Motherboard",
      image: "/images/categories/motherboard.png",
      quantity: 8,
    },
    {
      title: "Cameras",
      image: "/images/categories/camera.png",
      quantity: 8,
    },
    {
      title: "Headphones",
      image: "/images/categories/headphone.png",
      quantity: 8,
    },
    {
      title: "Drones",
      image: "/images/categories/drone.png",
      quantity: 8,
    },
    {
      title: "Tablets",
      image: "/images/categories/tablet.png",
      quantity: 8,
    },
  ];

  return (
    <section className="flex flex-col p-14 max-w-[2000px] ml-auto mr-auto">
      <h2 className="text-4xl font-bold">
        Popular Categories
      </h2>

      <div className="w-full flex justify-between gap-4">
        {
          categories.map((category, index) => (
            <PopularCategory
              key={index}
              category={category}
            />
          ))
        }
      </div>
    </section>
  );
};

export default PopularCategoriesSection;