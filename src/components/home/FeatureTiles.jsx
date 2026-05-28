import { getAllTilesData } from "@/data/getTilesData";
import TilesCard from "../shared/TilesCard";

const FeatureTiles = async () => {
  const allTiles = await getAllTilesData();
  console.log(allTiles, "tiles");

  return (
    <section className="w-11/12 mx-auto py-20">
      <div className="w-[80%] mx-auto space-y-4">
        <h2 className="font-semibold text-4xl text-center leading-tight">
          Everything you need to build your perfect home
        </h2>
        <p className="text-center text-gray-400 w-[70%] md:w-[60%] mx-auto">
          Explore our curated selection of stylish and innovative tile designs,
          crafted to elevate every space with the latest trends.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:gap-7  gap-4 my-7">
        {allTiles.slice(0, 6).map((tiles) => (
          <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
        ))}
      </div>
    </section>
  );
};

export default FeatureTiles;
