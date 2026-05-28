import Image from "next/image";
import sale from "../../../public/images/sale.png";
import "../../app/(auth)/auth.css";
import { FaSearch } from "react-icons/fa";

const TilesHeading = () => {
  return (
    <div
      className="h-screen bg-center bg-cover relative"
      style={{
        backgroundImage: "url('/images/allTiles.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="
        w-11/12 mx-auto
    absolute
    inset-0
    flex
    flex-col
    items-center
    justify-center
    space-y-5 mt-14
  "
      >
        <h2 className="text-center font-semibold text-4xl mb-8 text-white ">
          Discover Your Perfect Tile Aesthetic
        </h2>
        <div className="w-[70%] md:w-[37%] relative">
          <input
            className="w-full  bg-white   rounded py-1 px-4 focus:outline-4 focus:outline-[#deb487] focus:shadow-2xl "
            type="text"
            placeholder="Search for tiles by title"
          />
          <label
            className="absolute top-2 px-1 right-2 cursor-pointer 
          "
          >
            <FaSearch className="text-gray-400" />
          </label>
        </div>

        <div className="w-[90%] md:w-[60%]">
          <p className="text-center text-gray-100">
            Discover a world of luxury tiles designed to elevate every corner of
            your home. From modern marble aesthetics to timeless ceramic
            elegance, explore premium collections inspired by real interior
            masterpieces. Find the perfect texture, pattern, and finish to
            create spaces that feel uniquely royal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TilesHeading;
