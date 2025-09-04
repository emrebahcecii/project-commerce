import pctrs1 from "../assets/images/pctrs-1.png";
import pctrs2 from "../assets/images/pctrs-2.png";
import pctrs3 from "../assets/images/pctrs-3.png";

const posts = [
  { id: 1, image: pctrs1 },
  { id: 2, image: pctrs2 },
  { id: 3, image: pctrs3 },
];

export default function FeaturedPosts() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold">Practice Advice</p>
        <h2 className="text-3xl font-bold">Featured Posts</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-56">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg shadow-sm overflow-hidden bg-white"
          >
            <div className="relative">
              <img
                src={post.image}
                alt="post"
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            </div>

            <div className="p-4">
              <div className="flex space-x-2 text-xs text-gray-500 mb-2">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h3 className="font-bold text-lg mb-2">
                Loudest à la Madison #1 (L’intégral)
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>22 April 2021</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📊</span>
                  <span>10 comments</span>
                </div>
              </div>

              <button className="text-blue-500 font-semibold text-sm hover:underline flex items-center">
                Learn More <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
