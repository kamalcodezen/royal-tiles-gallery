import Link from "next/link";
import { Chip } from "@heroui/react";
import { FaArrowLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import GlobalLoading from "@/app/(main)/loading";

const TilesDetails = async ({ tile }) => {
  if (!tile) {
    return <GlobalLoading />;
  }

  const {
    title,
    description,
    image,
    category,
    price,
    creator,
    style,
    tags,
    rating,
    reviews,
    inStock,
    dimensions,
    material,
  } = tile;

  return (
    <section className="bg-[#f8fafc] py-16 min-h-[50vh]">
      <div className="w-11/12 sm:w-9/12 lg:w-10/12 mx-auto min-h-[50vh]">
        {/* Back Button */}
        <Link href="/all-tiles">
          <button
            className="
              flex
              items-center
              gap-2
              mt-4
              mb-7
              text-[#15508b]
              hover:text-orange-500
              transition-all
              duration-300
              font-medium
              cursor-pointer
            "
          >
            <FaArrowLeft />
            Back To Collection
          </button>
        </Link>

        {/* Main Card */}
        <div
          className="
            bg-white
            rounded-[2rem]
            overflow-hidden
            shadow-xl
            grid
            grid-cols-1
            lg:grid-cols-2 
          "
        >
          {/* Left Image */}
          <div className="relative group overflow-hidden">
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-full
                object-cover
                lg:min-h-screen
                group-hover:scale-105
                transition-all
                duration-700
              "
            />

            {/* Gradient Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/40
                via-transparent
                to-transparent
              "
            ></div>

            {/* Floating Category */}
            <div className="absolute top-6 left-6">
              <Chip
                className="
                  bg-white/20
                  backdrop-blur-xl
                  text-white
                  border
                  border-white/20
                  px-4
                "
              >
                {category}
              </Chip>
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 lg:p-5 flex flex-col justify-center">
            {/* Title */}
            <h1
              className="
                text-4xl
                md:text-5xl
                font-semibold
                leading-tight
                text-gray-900
              "
            >
              {title}
            </h1>

            {/* Creator + Style */}
            <div className="mt-3 space-y-2">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-black">Creator:</span>{" "}
                {creator}
              </p>

              <p className="text-lg text-gray-700">
                <span className="font-semibold text-black">Style:</span> {style}
              </p>

              <p className="text-lg text-gray-700">
                <span className="font-semibold text-black">Material:</span>{" "}
                {material}
              </p>

              <p className="text-lg text-gray-700">
                <span className="font-semibold text-black">Size:</span>{" "}
                {dimensions}
              </p>
            </div>

            {/* Description */}
            <p
              className="
                mt-4
                text-gray-600
                leading-8
                text-[17px]
              "
            >
              {description}
            </p>

            {/* Rating */}
            <div
              className="
                mt-5
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  bg-orange-50
                  px-4
                  py-2
                  rounded-full
                "
              >
                <FaStar className="text-orange-400" />

                <span className="font-semibold">{rating}</span>
              </div>

              <span className="text-gray-500">{reviews} Reviews</span>
            </div>

            {/* Tags */}
            <div className="mt-4">
              <h3
                className="
                  text-xl
                  font-semibold
                  mb-4
                "
              >
                Popular Tags
              </h3>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    variant="flat"
                    className="
                        bg-[#15508b]/10
                        text-[#15508b]
                        px-3
                      "
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Price + Stock */}
            <div
              className="
                mt-10
                flex
                items-center
                justify-between
                flex-wrap
                gap-5
              "
            >
              <div>
                <p className="text-gray-500">Starting From</p>

                <h2
                  className="
                    text-4xl
                    font-bold
                    text-[#15508b]
                  "
                >
                  ₹{price}
                </h2>
              </div>

              {inStock && (
                <div
                  className="
                      flex
                      items-center
                      gap-2
                      bg-green-50
                      text-green-600
                      px-5
                      py-3
                      rounded-full
                      font-medium
                    "
                >
                  <FaCheckCircle />
                  In Stock
                </div>
              )}
            </div>

            {/* Button */}
            <button
              className="
                mt-10
                relative
                overflow-hidden
                
                py-4
                hover:py-3.5
                transition-all duration-700
                rounded-full
                bg-[#15508b]
                text-white
                font-semibold
                group
                cursor-pointer
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-500
                  bg-gradient-to-r
                  from-orange-500
                  to-[#15508b]
                "
              ></span>

              <span className="relative z-10">Order Premium Collection</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TilesDetails;
