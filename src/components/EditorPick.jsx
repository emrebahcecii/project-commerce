import menImg from "../assets/images/resim-1.png";
import womenImg from "../assets/images/resim-2.png";
import accImg from "../assets/images/resim-3.png";
import kidsImg from "../assets/images/resim-4.png";

export default function EditorPick() {
  return (
    <section className="py-16 px-8">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">EDITOR’S PICK</h2>
        <p className="text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-6">
        {/* MEN */}
        <div className="relative col-span-2 row-span-2">
          <img
            src={menImg}
            alt="Men"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
            MEN
          </button>
        </div>

        {/* WOMEN (yüksek kutu) */}
        <div className="relative col-span-1 row-span-2">
          <img
            src={womenImg}
            alt="Women"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
            WOMEN
          </button>
        </div>

        {/* ACCESSORIES */}
        <div className="relative col-span-1">
          <img
            src={accImg}
            alt="Accessories"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-200">
            ACCESSORIES
          </button>
        </div>

        {/* KIDS (Accessories’in altında) */}
        <div className="relative col-span-1">
          <img
            src={kidsImg}
            alt="Kids"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200">
            KIDS
          </button>
        </div>
      </div>
    </section>
  );
}
