const ChooseCard = ({item}) => {
  return (
    <div
      className="
        relative
        group
        bg-white
        rounded-lg
        p-6
        overflow-hidden
        text-center border
      "
    >
      {/* Border Animation */}
      <span
        className="absolute top-0 left-0 h-[3px] w-0 bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 transition-all duration-500 group-hover:w-full"
      />

      <span
        className="absolute top-0 right-0 w-[3px] h-0 bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 transition-all duration-500 delay-100 group-hover:h-full"
      />

      <span
        className="absolute bottom-0 right-0 h-[3px] w-0 bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 transition-all duration-500 delay-200 group-hover:w-full"
      />

      <span
        className="absolute bottom-0 left-0 w-[3px] h-0 bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 transition-all duration-500 delay-300 group-hover:h-full"
      />

      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover mx-auto mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

      <p className="text-orange-500 text-sm font-medium mb-3">
        {item.subtitle}
      </p>

      <p className="text-gray-600 text-sm leading-6 sm:min-h-[120px] lg:min-h-0">{item.description}</p>
    </div>
  );
};

export default ChooseCard;
