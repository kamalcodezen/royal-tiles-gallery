import Link from "next/link";
import { Chip } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const TilesCard = ({ tiles }) => {

  const {
    id,
    title,
    image,
    category,
    style,
    rating,
    inStock,
    reviews,
  } = tiles;

  return (

    <div className="space-y-3">

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl group">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[210px]
            object-cover
            rounded-2xl
            group-hover:scale-110
            transition-all
            duration-500
            cursor-pointer
          "
        />

        {/* Overlay */}
        <div className="
          absolute
          inset-0
          bg-black/10
          group-hover:bg-black/10
          transition-all
          duration-500
        "></div>

        {/* Category */}
        <Chip
          className="
            absolute
            top-3
            left-3
            bg-white/20
            backdrop-blur-md
            text-white
            border
            border-white/20
          "
        >
          {category}
        </Chip>

        {/* Stock */}
        <Chip
          color={inStock ? "success" : "danger"}
          variant="flat"
          className="absolute top-3 right-3"
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </Chip>

      </div>

      {/* Content */}
      <div className="space-y-1">

        <div>

          <h2 className="text-xl font-semibold sm:min-h-[60px]">
            {title}
          </h2>

          <p className="text-gray-500 text-sm">
            {style}
          </p>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <FaStar className="text-orange-400" />

          <span className="font-medium">
            {rating}
          </span>

          <span className="text-gray-400 text-sm">
            ({reviews} reviews)
          </span>

        </div>

        {/* Button */}
        <Link href={`/tile/${id}`}>

          <button
            className="
              relative
              overflow-hidden
              w-full
              py-1.5
              rounded-full
              border
              border-[#15508b]
              text-[#15508b]
              font-medium
              group
              cursor-pointer mb-6
            "
          >

            {/* Hover Background */}
            <span
              className="
                absolute
                inset-0
                w-0
                group-hover:w-full
                transition-all
                duration-500
                bg-gradient-to-r
                from-[#15508b]
                via-[#1c6ab7]
                to-orange-500
                z-0
              "
            ></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-all duration-300">
              View Details
            </span>

          </button>

        </Link>

      </div>

    </div>
  );
};

export default TilesCard;