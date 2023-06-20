"use client";

import * as React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ImageCarousel = ({ images = [] as string[] }) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} infinite ssr>
        {images.map((image, key) => (
          <Image
            key={key}
            src={image}
            width={1000}
            height={1000}
            className="mx-auto aspect-[2/1] object-contain"
            draggable={false}
            priority={true}
            alt="Project Preview"
          />
        ))}
      </Carousel>
    </>
  );
};
