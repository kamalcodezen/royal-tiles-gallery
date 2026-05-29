import { getAllTilesData } from "@/data/getTilesData";
import TilesCard from "../shared/TilesCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const FeatureTiles = async () => {
  const allTiles = await getAllTilesData();
  // console.log(allTiles, "tiles");

  return (
    <section className="w-10/12 sm:w-10/12 lg:w-9/12 mx-auto py-20">
      <div className="w-[98%] mx-auto space-y-4">
        <h2
          className="font-semibold text-4xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent text-center leading-tight"
        >
          Everything you need to build your perfect home
        </h2>
        <p className="text-center text-gray-400 w-[70%] md:w-[60%] mx-auto">
          Explore our curated selection of stylish and innovative tile designs,
          crafted to elevate every space with the latest trends.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-7  gap-4 my-7 mb-9">
        {allTiles.slice(0, 6).map((tiles) => (
          <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
        ))}
      </div>
      <Link href="/all-tiles" className="text-center">
        <p className="uppercase text-[#15508b] sm:w-[50%] text-lg flex mx-auto items-center justify-center gap-2 hover:gap-4 transition-all duration-500 cursor-pointer  text-center">
          <span className="font-medium text-xl">Discover More </span>
          <span>
            <IoIosArrowDroprightCircle className="text-[#15508b] text-4xl" />
          </span>
        </p>
      </Link>
    </section>
  );
};

export default FeatureTiles;
