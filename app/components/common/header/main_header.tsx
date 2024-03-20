import { MdSearch, MdFavoriteBorder } from "react-icons/md";

export default function MainHeader() {
  return (
    <div className="w-full px-16 py-4 flex justify-center items-center text-sm font-semibold">
      <div className="flex gap-x-4 items-center">
        <a href="/" className="">
          Category
        </a>
        <a href="/" className="">
          Laptops By Brand
        </a>
        <a href="/" className="">
          Accessories
        </a>
        <a href="/" className="">
          Gaming
        </a>
        <a href="/" className="">
          About
        </a>
      </div>
      <div className="logo mx-auto">
        <a href="/" className="font-bold text-2xl">
          Laptop Mart
        </a>
      </div>
      <div className="flex gap-x-4 items-center">
        <button className="flex gap-x-1 items-center">
          <MdSearch size={20} />
          <p>Search</p>
        </button>
        <button className="flex gap-x-1 items-center">
          <MdFavoriteBorder size={18} />
          <p>Wishlist</p>
        </button>
        <button className="flex gap-x-1 items-center">
          <MdFavoriteBorder size={18} />
          <p>Contact</p>
        </button>
      </div>
    </div>
  );
}
