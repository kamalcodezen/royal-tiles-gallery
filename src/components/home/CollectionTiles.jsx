import { getAllTilesData } from "@/data/getTilesData";
import CollectionTilesSwiper from "../shared/CollectionTilesSwiper";

const CollectionTiles = async () => {
  const collection = await getAllTilesData();

  return (
    <section className="py-15 bg-slate-100">
      <div className="w-[80%]  md:w-[50%] mx-auto space-y-4">
        <h2
          className="font-semibold text-4xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent text-center leading-tight"
        >
          Collection
        </h2>
        <p className="text-center text-gray-400 ">
          Explore our curated selection of stylish and innovative tile designs,
          crafted to elevate every space with the latest trends.
        </p>
      </div>

      <CollectionTilesSwiper collection={collection} />
    </section>
  );
};

export default CollectionTiles;
