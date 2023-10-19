import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

interface SwiperProps {
  images: Image[];
}

const swiper: React.FC<SwiperProps> = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              width={500} // specify dimensions
              height={300}
              src={image.src}
              alt={image.alt}
              loading="eager"
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default swiper;
