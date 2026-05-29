"use client";

import { useState } from "react";

const TileShowroom = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-11/12 md:w-11/12 mx-auto py-20">
      <div className="max-w-5xl">
        <p className="text-orange-500 font-medium uppercase tracking-wider">
          Premium Tile Collections
        </p>

        <h2
          className="font-semibold text-2xl sm:text-4xl  bg-linear-to-r from-[#15508b] via-[#1c6ab7]
 to-orange-500 bg-clip-text text-transparent"
        >
          Elegant Designs - Affordable Luxury With Endless Options
        </h2>

        <div className="mt-3 text-gray-600 leading-8 space-y-1">
          <p>
            Welcome to Royal Tiles, where quality, innovation, and timeless
            design come together. Our carefully curated tile collections are
            crafted to transform ordinary spaces into elegant and inspiring
            environments.
          </p>

          {showMore && (
            <>
              <p>
                Whether you're searching for modern ceramic finishes, luxurious
                marble-inspired designs, durable porcelain surfaces, or
                contemporary statement tiles, Royal Tiles offers solutions
                tailored to every style and need. Each collection is selected
                with a focus on superior craftsmanship, lasting durability, and
                aesthetic excellence.
              </p>

              <p>
                From living rooms and kitchens to bathrooms and commercial
                interiors, our tiles are designed to elevate every corner with
                beauty, functionality, and reliability. Explore a wide variety
                of colors, textures, patterns, and finishes that help bring your
                vision to life.
              </p>

              <p>
                At Royal Tiles, we believe great design begins from the ground
                up. Discover premium surfaces that combine luxury, performance,
                and value to create spaces you'll love for years to come.
              </p>
            </>
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="
            mt-6
            font-semibold
            text-orange-500
            hover:text-orange-600
            transition-all
            duration-300
          "
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default TileShowroom;
