const AllTilesLoading = () => {
  return (
    <div
      className="
        w-9/12
        sm:w-10/12
        lg:w-10/12
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-7
        py-20
      "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
              rounded-2xl
              overflow-hidden
              border
              border-gray-200
              shadow-sm
              animate-pulse
            "
        >
          {/* Image Skeleton */}
          <div
            className="
              w-full
              h-[220px]
              bg-gray-300
            "
          ></div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Title */}
            <div
              className="
                h-6
                w-[70%]
                bg-gray-300
                rounded
              "
            ></div>

            {/* Subtitle */}
            <div
              className="
                h-4
                w-[40%]
                bg-gray-200
                rounded
              "
            ></div>

            {/* Rating */}
            <div
              className="
                h-4
                w-[30%]
                bg-gray-200
                rounded
              "
            ></div>

            {/* Button */}
            <div
              className="
                h-10
                w-full
                bg-gray-300
                rounded-full
                mt-5
              "
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTilesLoading;
