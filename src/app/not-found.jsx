import Link from "next/link";

const GlobalNotFoundPage = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#f8fafc]
      px-5
    "
    >
      <div className="text-center">
        {/* 404 */}
        <h1
          className="
          text-7xl
          md:text-9xl
          font-black
          bg-gradient-to-r
          from-[#15508b]
          via-[#1c6ab7]
          to-orange-500
          bg-clip-text
          text-transparent
        "
        >
          404
        </h1>

        {/* Title */}
        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          mt-4
          text-gray-800
        "
        >
          Page Not Found
        </h2>

        {/* Description */}
        <p
          className="
          text-gray-500
          mt-4
          max-w-xl
          mx-auto
        "
        >
          Oops! The page you are looking for doesn't exist or may have been
          moved.
        </p>

        {/* Button */}
        <Link href={"/"}>
          <button
            className="
              mt-8
              relative
              overflow-hidden
              px-8
              py-3
              rounded-full
              border
              border-[#15508b]
              text-[#15508b]
              font-medium
              group
              cursor-pointer
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
            <span
              className="
              relative
              z-10
              group-hover:text-white
              transition-all
              duration-300
            "
            >
              Back To Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GlobalNotFoundPage;
