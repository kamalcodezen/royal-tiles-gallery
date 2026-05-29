import { getAllTilesData } from "@/data/getTilesData";
import CollectionTilesSwiper from "../shared/CollectionTilesSwiper";

const CollectionTiles = async () => {
  const collection = await getAllTilesData();

  return (
    <section className="py-15 bg-slate-100">
      <div className="md:w-[50%] mx-auto space-y-4">
        <h2 className="text-5xl font-medium text-center">Collection</h2>
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
