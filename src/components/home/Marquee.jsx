"use client";

import Marquee from "react-fast-marquee";
import { FaCrown, FaGem, FaArrowRight } from "react-icons/fa6";

const LuxuryMarquee = () => {
  return (
    <div
      className=" absolute bottom-0 left-1/2 -translate-x-1/2 z-30  w-full   shadow-2xl overflow-hidden
    "
    >
      <Marquee speed={50} gradient={false} pauseOnHover className="py-4">
        <div className="flex items-center gap-14 px-6 text-white">
          {/* Item */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10  h-10 rounded-full  bg-orange-500/20 border border-orange-400/30
            "
            >
              <FaGem className="text-orange-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                New Arrival
              </p>

              <h3 className="text-sm md:text-base font-semibold">
                Royal Marble Luxe Collection
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-orange-400" />

          {/* Item */}
          <div className="flex items-center gap-3">
            <div
              className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-orange-500/20
              border
              border-orange-400/30
            "
            >
              <FaCrown className="text-orange-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Weekly Feature
              </p>

              <h3 className="text-sm md:text-base font-semibold">
                Modern Geometric Patterns
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-orange-400" />

          {/* Item */}
          <div className="flex items-center gap-3">
            <div
              className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-orange-500/20
              border
              border-orange-400/30
            "
            >
              <FaGem className="text-orange-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Exclusive Offer
              </p>

              <h3 className="text-sm md:text-base font-semibold">
                Luxury Ceramic Tiles from ₹149 /sq.ft
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-orange-400" />

          {/* Item */}
          <div className="flex items-center gap-3">
            <div
              className="
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-full
              bg-orange-500/20
              border
              border-orange-400/30
            "
            >
              <FaCrown className="text-orange-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Community
              </p>

              <h3 className="text-sm md:text-base font-semibold">
                Join 10,000+ Happy Homeowners
              </h3>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default LuxuryMarquee;
