"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const CollectionTilesSwiper = ({ collection }) => {
  return (
    <section className=" w-full  mx-auto  pt-8 pb-20">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          640: {
            slidesPerView: 2.1,
          },
          1024: {
            slidesPerView: 3.4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {collection.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group overflow-hidden">
              <Link href={`/tileDetails/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="
            w-full
            h-80
            md:h-85
            object-cover
            rounded group-hover:scale-110 transition-all duration-500
          "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                <p className="absolute z-10 text-white text-xl bottom-5 left-5  flex items-center gap-2">
                  <span>{item.title}</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CollectionTilesSwiper;
