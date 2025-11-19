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
    <section className="flex flex-col p-6 md:p-14 mx-auto gap-4">
      <h2 className="text-2xl md:text-4xl font-bold">
        Popular Categories
      </h2>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        lg:grid-cols-5 xl:grid-cols-7">
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