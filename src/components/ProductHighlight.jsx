import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import childImg from "../assets/images/child.png";
import pexelImg from "../assets/images/pexel.jpg";

export default function ProductHighlight() {
  return (
    <section className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-[#23856D] flex items-center justify-around px-6 gap-4">
            <div className="text-white max-w-md">
              <h4 className="uppercase tracking-widest text-base mb-3">
                Summer 2020
              </h4>
              <h1 className="text-5xl font-bold mb-4">Vita Classic Product</h1>
              <p className="mb-6 text-base leading-relaxed">
                We know how large objects will act, We know how are objects
                will act, We know
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold">$16.48</span>
                <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={childImg}
                alt="product"
                className="h-[400px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[#23856D] flex items-center justify-around px-6 gap-4">
            <div className="text-white max-w-md">
              <h4 className="uppercase tracking-widest text-base mb-3">
                New Collection
              </h4>
              <h1 className="text-5xl font-bold mb-4">Pexel Modern Product</h1>
              <p className="mb-6 text-base leading-relaxed">
                Discover new styles for every occasion with our modern
                collection.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold">$24.99</span>
                <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold">
                  ADD TO CART
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={pexelImg}
                alt="product"
                className="h-[400px] object-contain rounded-4xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
