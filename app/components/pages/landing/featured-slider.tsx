import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

export const data = [
  {
    title: "Slide 1",
    image: images[0],
  },
  {
    title: "Slide 2",
    image: images[1],
  },
  {
    title: "Slide 3",
    image: images[2],
  },
];

export default function FeaturedSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      loop
      speed={1200}
      navigation={{ enabled: true }}
      pagination={{ clickable: true }}
      className="h-[80vh] w-full"
      effect="slide"
      onSlideChangeTransitionStart={() => {
        gsap.from(".swiper-slide-active h1", {
          opacity: 0,
          y: 100,
          ease: "power2.inOut",
          duration: 0.6,
          animation: 1,
          delay: 0.6,
        });
      }}
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index} className="w-full flex flex-col relative">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
          </div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full inset-0 -z-[1]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
