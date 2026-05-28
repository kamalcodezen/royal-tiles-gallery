const GlobalLoading = () => {
  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-white
    "
    >
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div
          className="
          relative
          w-20
          h-20
        "
        >
          {/* Outer Ring */}
          <div
            className="
            absolute
            inset-0
            rounded-full
            border-4
            border-[#15508b]/20
          "
          ></div>

          {/* Animated Ring */}
          <div
            className="
            absolute
            inset-0
            rounded-full
            border-4
            border-transparent
            border-t-[#15508b]
            border-r-orange-500
            animate-spin
          "
          ></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2
            className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-[#15508b]
            via-[#1c6ab7]
            to-orange-500
            bg-clip-text
            text-transparent
          "
          >
            Royal Tiles
          </h2>

          <p className="text-gray-500 mt-2">Loading premium experience...</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;
