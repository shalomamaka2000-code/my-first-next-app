type NavbarProps = {
  cartCount: number;
};

export default function Navbar({ cartCount }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-6 bg-pink-500 text-white">
      <h1 className="text-2xl font-bold">
        Rosy Flower Shop 🌸
      </h1>
      <h2>Cart: {cartCount}</h2>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-pink-200">
          Home
        </li>

        <li className="cursor-pointer hover:text-pink-200">
          Store
        </li>

        <li className="cursor-pointer hover:text-pink-200">
          About
        </li>

        <li className="cursor-pointer hover:text-pink-200">
          Contact
        </li>
      </ul>
    </nav>
  );
}