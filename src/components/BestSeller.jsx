import pic1 from "../assets/images/pic-1.png";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.png";
import pic4 from "../assets/images/pic-4.png";
import pic5 from "../assets/images/pic-5.png";
import pic6 from "../assets/images/pic-6.png";
import pic7 from "../assets/images/pic-7.png";
import pic8 from "../assets/images/pic-8.png";

const products = [
  { id: 1, image: pic1 },
  { id: 2, image: pic2 },
  { id: 3, image: pic3 },
  { id: 4, image: pic4 },
  { id: 5, image: pic5 },
  { id: 6, image: pic6 },
  { id: 7, image: pic7 },
  { id: 8, image: pic8 },
];

export default function BestSeller() {
  return (
    <section className="pt- pb-16">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h4 className="text-gray-500 uppercase text-sm tracking-wide">
          Featured Products
        </h4>
        <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500 text-sm mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Ürünler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt="product"
              className="w-full h-auto mb-4"
            />
            <h3 className="font-semibold">Graphic Design</h3>
            <p className="text-gray-500 text-sm">English Department</p>

            {/* Fiyat */}
            <div className="mt-2">
              <span className="text-gray-400 line-through mr-2">$16.48</span>
              <span className="text-blue-600 font-bold">$6.48</span>
            </div>

            {/* Renk Seçenekleri */}
            <div className="flex justify-center space-x-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-teal-500"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              <span className="w-4 h-4 rounded-full bg-gray-700"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
