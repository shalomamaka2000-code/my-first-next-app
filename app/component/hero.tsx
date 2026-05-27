export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-10">
      <h1 className="text-6xl font-bold text-pink-600 mb-6">
        Fresh Flowers For Every Occasion 🌸
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Discover elegant handcrafted bouquets made
        with love and delivered fresh to your door.
      </p>

      <button className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600">
        Shop Now
      </button>
    </section>
  );
}