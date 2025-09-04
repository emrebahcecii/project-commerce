import hasImg from "../assets/images/has.png";

export default function NeuralUniverse() {
  return (
    <section className="w-full !m-0 !p-0 !mt-0 !pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[650px]">
        <div className="flex items-center justify-end pr-6 h-full">
          <img
            src={hasImg}
            alt="neural-universe"
            className="h-[520px] object-contain"
          />
        </div>

        <div className="flex items-center justify-start pl-6 h-full">
          <div className="max-w-sm text-left">
            <h4 className="text-gray-400 uppercase text-sm mb-2">Summer 2020</h4>
            <h2 className="text-4xl font-bold mb-4 leading-snug">
              Part of the Neural Universe
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition">
                BUY NOW
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-2 rounded-md font-semibold hover:bg-green-100 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
