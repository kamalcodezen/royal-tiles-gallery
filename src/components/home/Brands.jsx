import BrandsCard from "../shared/BrandsCard";

const Brands = () => {
  const brandsData = [
    {
      id: 1,
      image: "https://i.ibb.co/ZQP75dN/Johnson.webp",
    },
    {
      id: 2,
      image: "https://i.ibb.co/tP44R6gj/Nitco.webp",
    },
    {
      id: 3,
      image: "https://i.ibb.co/sp7qNNy4/Harsha-Tiles.webp",
    },
    {
      id: 4,
      image: "https://i.ibb.co/VYWCx738/RAK.webp",
    },
    {
      id: 5,
      image: "https://i.ibb.co/vxL2H5nr/Simpolo.webp",
    },
    {
      id: 6,
      image: "https://i.ibb.co/WWnrMj74/Somany.webp",
    },
    {
      id: 7,
      image: "https://i.ibb.co/BVM3NVG4/Kajaria-1-300x158.webp",
    },
  ];

  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-20">
      <p
        className="font-semibold text-4xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent text-center"
      >
        Our Trusted Brand Partners, Chosen for Quality and Excellence
      </p>

      {/* Top Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mt-10 mx-auto">
        {brandsData.slice(0, 4).map((item) => (
          <BrandsCard key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
        {brandsData.slice(4, 7).map((item) => (
          <div key={item.id} className="w-full md:w-[23%]">
            <BrandsCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
