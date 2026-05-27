'use client';
import {useState} from "react";
  import Navbar from "./component/navbar";
import Hero from "./component/hero";
import ProductCard from "./component/ProductCard";
import Footer from "./component/footer";
export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  function onAddToCart() {
  setCartCount(cartCount + 1);
}
  return (
    <main className="min-h-screen   bg-pink-50 p-10">
      <Navbar
        cartCount={cartCount}
      />
      <Hero />
      <div className="my-10 border-t border-gray-300 w-full" />
      <h1 className="text-5xl font-bold text-pink-600 mb-6">
        Rosy Flower Shop 🌸
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        Welcome to Rosy Flower Shop. We create beautiful flower
        arrangements for birthdays, weddings, anniversaries,
        and special occasions.
      </p>

      <button 
      className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-xl">
        Shop Now
      </button>

     <div className="flex gap-6 p-10 flex-wrap">
      <ProductCard 
      onAddToCart={onAddToCart}
      image="/rose2.webp"
      name="Red Rose"
      price={19.99}
      />

      <ProductCard
      onAddToCart={onAddToCart}
      image="/lilly2.jpg"
      name="Lilly"
      price={29.99}
      />

      <ProductCard
      onAddToCart={onAddToCart}
      image="/mixed2.webp"
      name="Mixed Bouquet"
      price={24.99}
      />

      <ProductCard
      onAddToCart={onAddToCart}
      image="/tulip2.jpg"
      name="Tulip"
      price={14.99}
      />
      </div>

      <Footer />
    </main>
  );
}