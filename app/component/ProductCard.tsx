import Image from 'next/image';

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  onAddToCart: () => void;
};
export default function ProductCard({
  image,
  name,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-72">
      <Image
        src={image}
        alt={name}
        width={300}
        height={240}
        className="w-full h-60 object-cover rounded-xl"
       />

      <h2 className="text-pink-600 text-2xl font-semibold mt-4">
        {name}
      </h2>

      <p className="text-pink-600 text-xl font-bold mt-2">
        {price}
      </p>

      <button onClick={() => {
        onAddToCart();
       alert("cart updated successfully");
      }}
      className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700">
        Add to Cart
      </button>
    </div>

    
  );
}