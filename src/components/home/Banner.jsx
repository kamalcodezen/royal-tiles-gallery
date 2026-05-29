"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/banner-1.png')",
            }}
          >
            <div className="max-w-3xl h-full flex items-center  justify-start px-5 md:px-16 pb-20 md:pb-0">
              <div className="text-white max-w-3xl text-center md:text-left mb-40 lg:ml-20">
                <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                  Ghar mein
                  <span className="text-4xl md:text-6xl italic font-bold">
                    {" "}
                    Royal
                  </span>
                  <br />
                  <span>Log toh poochenge hi</span>
                </h1>
                <Link href={"/all-tiles"}>
                  <div className="text-xl md:text-2xl flex items-center justify-center md:justify-start gap-4 hover:gap-2 transition-all duration-300 text-white mt-3">
                    <p className="font-medium  transition-all duration-300">
                      Browse Now
                    </p>

                    <IoIosArrowDroprightCircle className="text-white text-3xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 flex items-end md:items-center justify-center md:justify-start h-full px-5 md:px-16 pb-20 md:pt-70">
              <div className="max-w-2xl text-white text-center md:text-left">
                <h1 className="text-3xl md:text-6xl  leading-tight">
                  Discover Your Perfect Aesthetic
                </h1>

                <p className="my-3 text-base md:text-[18px] text-gray-200">
                  Premium and elegant tiles for modern interiors.
                </p>

                <Link href={"/all-tiles"}>
                  <div className="text-xl md:text-2xl flex items-center justify-center md:justify-start gap-4 hover:gap-2 transition-all duration-300 text-white mt-3">
                    <p className="font-medium  transition-all duration-300">
                      Browse Now
                    </p>

                    <IoIosArrowDroprightCircle className="text-white text-3xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <div
            className="h-screen bg-center bg-cover relative "
            style={{ backgroundImage: "url('/images/banner-2.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 flex items-end justify-center md:justify-center h-full px-5 md:px-16 pb-20 md:pb-28 ">
              <div className="max-w-3xl text-center md:text-left">
                <h2 className=" text-3xl sm:text-4xl md:text-6xl text-white leading-tight  text-center">
                  Timeless Tiles for
                  <span className="italic text-orange-400">
                    Tranquil Spaces
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base  md:text-lg  text-white  max-w-2xl mx-auto  leading-relaxed text-center">
                  Elevate your bathroom with tiles that blend elegance and
                  serenity. The timeless collection is designed to create a
                  calming and luxurious environment.
                </p>
                <Link href={"/all-tiles"}>
                  <div className="text-xl md:text-2xl flex items-center justify-center t gap-4 hover:gap-2 transition-all duration-300 text-white mt-3 mx-auto">
                    <p className="font-medium  transition-all duration-300 text-center">
                      Browse Now
                    </p>

                    <IoIosArrowDroprightCircle className="text-white text-3xl text-center" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 4 */}
        <SwiperSlide>
          <div
            className="h-screen bg-center bg-cover relative bg-black/50"
            style={{ backgroundImage: "url('/images/banner-3.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 flex items-end justify-center md:justify-center h-full px-5 md:px-16 pb-20 md:pb-28 text-center">
              <div className="max-w-3xl text-center ">
                <h2 className=" text-3xl sm:text-4xl md:text-6xl text-white leading-tight  text-center">
                  Beauty That Lasts Beyond Seasons
                </h2>

                <p className="mt-4 text-sm sm:text-base  md:text-md   text-white  max-w-2xl mx-auto leading-relaxed text-center">
                  Built to endure, designed to impress—our outdoor tiles bring
                  lasting beauty to every season.
                </p>
                <Link href={"/all-tiles"}>
                  <div className="text-xl md:text-2xl flex items-center justify-center t gap-4 hover:gap-2 transition-all duration-300 text-white mt-3 mx-auto">
                    <p className="font-medium  transition-all duration-300 text-center">
                      Browse Now
                    </p>

                    <IoIosArrowDroprightCircle className="text-white text-3xl text-center" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
