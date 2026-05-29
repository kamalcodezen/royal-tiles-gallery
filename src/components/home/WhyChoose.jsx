import ChooseCard from "../shared/ChooseCard";

const WhyChoose = () => {
  const whyChooseUsData = [
    {
      id: 1,
      title: "Premium Quality",
      subtitle: "Superior Craftsmanship",
      description:
        "High-performance tiles engineered for elegance, durability, and long-lasting performance.",
      image: "https://i.ibb.co/RkkFkTyw/Exceptional.webp",
    },
    {
      id: 2,
      title: "Extensive Collection",
      subtitle: "Rich Design Range",
      description:
        "Explore modern, classic, marble, ceramic, and designer tile collections in a wide range of colors and textures.",
      image: "https://i.ibb.co/PsRwj9jp/Extensive.webp",
    },
    {
      id: 3,
      title: "Trusted Excellence",
      subtitle: "Credibility & Trust",
      description:
        "Committed to quality craftsmanship, customer satisfaction, and industry-leading standards.",
      image: "https://i.ibb.co/MyPLxdHc/Trusted.webp",
    },
    {
      id: 4,
      title: "Flexible Applications",
      subtitle: "Designed for Every Space",
      description:
        "Perfect tile solutions for living rooms, kitchens, bathrooms, commercial spaces, and outdoor areas.",
      image: "https://i.ibb.co/qYPPs3jJ/Trust.webp",
    },
    {
      id: 5,
      title: "Eco-Friendly Innovation",
      subtitle: "Sustainable Living",
      description:
        "Responsibly crafted tiles using advanced manufacturing processes that prioritize sustainability and environmental care.",
      image: "https://i.ibb.co/SXvzkMVG/Designed.webp",
    },
  ];

  return (
    <section className="w-10/12 mx-auto py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="font-semibold text-4xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent text-center leading-tight"
        >
          Why Choose Royal Tiles
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Premium quality tiles crafted to bring beauty, durability, and style
          to every space.
        </p>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyChooseUsData.slice(0, 3).map((item) => (
          <ChooseCard key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
        {whyChooseUsData.slice(3, 5).map((item) => (
          <div key={item.id} className="w-full md:w-[31%]">
            <ChooseCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
