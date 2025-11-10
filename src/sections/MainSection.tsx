
const MainSection = () => {
  return (
    <section className="grid grid-cols-4 gap-6 p-14 ml-auto mr-auto">
      <div
        className="bg-purple-400 rounded-2xl col-span-2 row-span-2
          hover:scale-102 transition-transform duration-300 cursor-pointer
          bg-[url('/images/banners/apple-event.png')] bg-cover bg-center"
      >
        
      </div>
      <div
        className="aspect-[2.42/1] bg-black/60 rounded-2xl col-span-2
          hover:scale-102 transition-transform duration-300 cursor-pointer
            bg-[url('/images/banners/sonys.png')] bg-cover bg-center"
      >
        
      </div>
      <div
        className="aspect-2/1 bg-blue-200 rounded-2xl
          hover:scale-102 transition-transform duration-300 cursor-pointer
            bg-[url('/images/banners/dualsense.png')] bg-cover bg-center"
      >
        
      </div>
      <div
        className="aspect-2/1 bg-yellow-200 rounded-2xl
          hover:scale-102 transition-transform duration-300 cursor-pointer
            bg-[url('/images/banners/instant-cameras.png')] bg-cover bg-center"
      >
        
      </div>
    </section>
  );
};

export default MainSection;