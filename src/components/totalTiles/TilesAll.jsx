import { getAllTilesData } from "@/data/getTilesData";
import TilesCard from "../shared/TilesCard";

const TilesAll = async () => {
  const allTiles = await getAllTilesData();

  return (
    <div className="w-9/12 sm:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:gap-7  gap-4 my-7 mb-9 ">
      {allTiles.map((tiles) => (
        <TilesCard key={tiles.id} tiles={tiles}></TilesCard>
      ))}
    </div>
  );
};

export default TilesAll;
