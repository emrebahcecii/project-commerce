import { useParams } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

import pic1 from "../../assets/images/pic-1.png";
import pic2 from "../../assets/images/pic-2.png";
import pic3 from "../../assets/images/pic-3.png";
import pic4 from "../../assets/images/pic-4.png";
import pic5 from "../../assets/images/pic-5.png";
import pic6 from "../../assets/images/pic-6.png";
import pic7 from "../../assets/images/pic-7.png";
import pic8 from "../../assets/images/pic-8.png";
import hed from "../../assets/images/değiş.png";

import BestSeller from "../../components/BestSeller";

import { SiAmazon, SiLyft, SiStripe, SiReddit, SiGoogle, SiFacebook } from "react-icons/si";

const sponsorIcons = [SiAmazon, SiLyft, SiStripe, SiReddit, SiGoogle, SiFacebook];

const productImages = {
  1: [pic1, pic2],
  2: [pic2, pic3],
  3: [pic3, pic4],
  4: [pic4, pic5],
  5: [pic5, pic6],
  6: [pic6, pic7],
  7: [pic7, pic8],
  8: [pic8, pic1],
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const images = productImages[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images) {
    return <p className="text-center py-10">Product not found!</p>;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="text-sm text-gray-600 mb-6">
        <span className="font-semibold text-gray-900">Home</span> / Shop
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Product ${id}`}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              {">"}
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`w-24 h-20 object-cover rounded-lg border cursor-pointer ${
                  currentIndex === idx ? "border-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Product {id}</h2>

          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500">10 Reviews</span>
          </div>

          <p className="text-2xl font-bold mb-2">$1,139.33</p>
          <p className="text-sm mb-4">
            Availability:{" "}
            <span className="text-green-600 font-semibold">In Stock</span>
          </p>
          <p className="text-gray-600 mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <hr className="mb-6" />

          <div className="flex gap-3 mb-6">
            <button className="w-6 h-6 rounded-full bg-sky-500"></button>
            <button className="w-6 h-6 rounded-full bg-orange-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
            <button className="w-6 h-6 rounded-full bg-gray-800"></button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium">
              Select Options
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <Heart size={18} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <ShoppingCart size={18} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex justify-center gap-8 border-b">
          <button className="pb-2 border-b-2 border-black font-medium">
            Description
          </button>
          <button className="pb-2 text-gray-500 hover:text-black">
            Additional Information
          </button>
          <button className="pb-2 text-gray-500 hover:text-black">
            Reviews (0)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img
              src={hed}
              alt="extra-section"
              className="rounded-lg shadow w-full max-w-sm object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">
              the quick fox jumps over
            </h3>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-gray-600">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4">
              the quick fox jumps over
            </h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>› the quick fox jumps over the lazy dog</li>
              <li>› the quick fox jumps over the lazy dog</li>
              <li>› the quick fox jumps over the lazy dog</li>
              <li>› the quick fox jumps over the lazy dog</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">
              the quick fox jumps over
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>› the quick fox jumps over the lazy dog</li>
              <li>› the quick fox jumps over the lazy dog</li>
              <li>› the quick fox jumps over the lazy dog</li>
            </ul>
          </div>
        </div>
      </div>

      <BestSeller />

      <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
                {sponsorIcons.map((Icon, i) => ( <Icon key={i} className="h-16 w-16 opacity-70 hover:opacity-100 transition text-gray-600 mx-auto" /> ))}
         </div>
      </section>

    </div>
  );
}
