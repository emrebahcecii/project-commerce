import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImg from "../assets/images/hero.png";
import resimImg from "../assets/images/resim.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        allowTouchMove={false}
        className="w-full h-full z-10"
      >
        <SwiperSlide>
          <div
            className="w-screen h-screen bg-cover"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundPosition: "top center",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${resimImg})` }}
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-start pl-56 z-20 pointer-events-none">
        <div className="text-white max-w-xl pointer-events-auto">
          <h3 className="text-base uppercase tracking-widest mb-4">
            Summer 2025
          </h3>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-green-500 text-white px-8 py-4 text-lg rounded-lg font-semibold hover:bg-green-600 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
