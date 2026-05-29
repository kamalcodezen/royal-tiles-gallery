"use client";

import { useEffect, useState } from "react";
import "../../app/(auth)/auth.css";
import { FaSearch } from "react-icons/fa";
import { getAllTilesData, getSearchTilesData } from "@/data/getTilesData";
import TilesCard from "../shared/TilesCard";
import AllTilesLoading from "../shared/AllTilesLoading";
import { useRouter } from "next/navigation";

const TilesAll = () => {
  const router = useRouter();

  // Search Input
  const [search, setSearch] = useState("");
  // Search Result
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load All Tiles Initially
  useEffect(() => {
    const loadTiles = async () => {
      setLoading(true);
      setTimeout(async () => {
        const allTiles = await getAllTilesData();
        setSearchData(allTiles);

        setLoading(false);
      }, 1000);
    };

    loadTiles();
  }, []);
  // Handle Search
  const handleSearch = async () => {
    const filterSearchData = await getSearchTilesData(search);

    setSearchData(filterSearchData);
  };

  return (
    <div>
      {/* Banner */}
      <div
        className=" h-screen bg-center  bg-cover  relative  "
        style={{
          backgroundImage: "url('/images/allTiles.png')",
        }}
      >
        {/* Overlay */}
        <div className="  absolute  inset-0  bg-black/40 "></div>

        {/* Content */}
        <div
          className="
            w-11/12
            mx-auto
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            space-y-5
            mt-14
          "
        >
          <h2
            className="
              text-center
              font-semibold
              text-3xl
              md:text-5xl
              text-white
            "
          >
            Discover Your Perfect Tile Aesthetic
          </h2>

          {/* Search */}
          <div
            className="
            w-[80%]
            md:w-[37%]
            relative
          "
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-white
                rounded-full
                py-3
                px-5
                focus:outline-none
                text-black
              "
              type="text"
              placeholder="Search for tiles by title"
            />

            <button
              onClick={handleSearch}
              className="
                absolute
                top-1/2
                -translate-y-1/2
                right-3
                bg-[#15508b]
                hover:bg-orange-500
                transition-all
                duration-300
                text-white
                p-3
                rounded-full
                cursor-pointer
              "
            >
              <FaSearch />
            </button>
          </div>

          {/* Description */}
          <div
            className="
            w-[90%]
            md:w-[60%]
          "
          >
            <p
              className="
              text-center
              text-gray-100
              text-sm
              md:text-base
            "
            >
              Discover a world of luxury tiles designed to elevate every corner
              of your home.
            </p>
          </div>
        </div>
      </div>

      {/* Tiles */}
      <div className="w-10/12 mx-auto">
        {loading ? (
          <div className="w-10/12 mx-auto">
            <AllTilesLoading />
          </div>
        ) : (
          <>
            <button
              onClick={() => router.back()}
              className="mt-6 px-5 py-1.5 bg-[#15508b]  text-white  rounded"
            >
              Go Back
            </button>
            <div
              className="
          w-11/12
          sm:w-10/12
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-7
          gap-4
          my-7
          mb-9
        "
            >
              {searchData.slice(0, 12).map((tiles) => (
                <TilesCard key={tiles.id} tiles={tiles} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TilesAll;
