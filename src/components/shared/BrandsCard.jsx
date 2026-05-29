const BrandsCard = ({ item }) => {
  return (
    <div
      className="
        border
        border-gray-200
        rounded-lg
        p-4
        flex
        items-center
        justify-center
        md:w-50
        h-28
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <img
        src={item.image}
        alt={item?.name}
        className="
          h-auto
          w-auto
          object-cover
          transition-all
          duration-300
        "
      />
    </div>
  );
};

export default BrandsCard;
