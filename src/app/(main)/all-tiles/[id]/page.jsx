import TilesDetails from "@/components/singleTiles/TilesDetails";
import { getAllTilesData } from "@/data/getTilesData";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const allTiles = await getAllTilesData();

  const tile = allTiles.find((tiles) => tiles.id == id);
  //   console.log(tile);
  if (!tile) {
    return (
      <div className="p-10 text-center text-red-500">Tiles not found</div>
    );
  }
  return (
    <div>
      <TilesDetails tile={tile} />
    </div>
  );
};

export default TilesDetailsPage;
