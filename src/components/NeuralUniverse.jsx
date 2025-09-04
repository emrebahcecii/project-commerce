import hasImg from "../assets/images/has.png";

export default function NeuralUniverse() {
  return (
    <section className="w-full !m-0 !p-0 !mt-0 !pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[650px]">

        <div className="order-1 md:order-2 flex items-center justify-center md:justify-start px-6 py-10 md:py-0 h-full">
          <div className="max-w-sm text-center md:text-left">
            <h4 className="text-gray-400 uppercase text-sm mb-2">
              Summer 2020
            </h4>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              Part of the Neural Universe
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
                BUY NOW
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-100 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1 flex items-center justify-center md:justify-end px-6 h-full">
          <img
            src={hasImg}
            alt="neural-universe"
            className="h-72 md:h-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
