
const Newsletter = () => {
  return (
    <section className="w-full my-16 px-16 py-24 border-t border-gray-300">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between ">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-bold">
            Subscribe to our newsletter
          </h2>

          <p className="text-2xl">
            Stay up to date and get informed when the latest tech drops.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 rounded-lg border-none px-6 py-3 ring-2 ring-gray-300 hover:ring-blue-500
              transition-all duration-300 focus:ring-offset-0 focus:ring-blue-500 outline-none"
          />

          <div className="w-80 bg-black px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300
            cursor-pointer text-white text-lg font-bold flex items-center justify-center">
            Subscribe
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;