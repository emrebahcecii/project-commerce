import React from "react";
import { SiAmazon, SiLyft, SiStripe, SiReddit, SiGoogle, SiFacebook } from "react-icons/si";

import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";

import bu1 from "../assets/images/bu1.png";
import bu2 from "../assets/images/bu2.png";
import bu3 from "../assets/images/bu3.png";
import bu4 from "../assets/images/bu4.png";

import pic1 from "../assets/images/pic-1.png";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.png";
import pic4 from "../assets/images/pic-4.png";
import pic5 from "../assets/images/pic-5.png";
import pic6 from "../assets/images/pic-6.png";
import pic7 from "../assets/images/pic-7.png";
import pic8 from "../assets/images/pic-8.png";

const categories = [c1, c2, c3, c4, c5];

const products = [
  { id: 1, image: bu1 },
  { id: 2, image: bu2 },
  { id: 3, image: bu3 },
  { id: 4, image: bu4 },
  { id: 5, image: pic1 },
  { id: 6, image: pic2 },
  { id: 7, image: pic3 },
  { id: 8, image: pic4 },
  { id: 9, image: pic5 },
  { id: 10, image: pic6 },
  { id: 11, image: pic7 },
  { id: 12, image: pic8 },
];

const sponsorIcons = [SiAmazon, SiLyft, SiStripe, SiReddit, SiGoogle, SiFacebook];

export default function ShopPage() {
  return (
    <section className="px-4 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <h2 className="text-3xl font-bold text-center md:text-left">Shop</h2>
        <nav className="text-gray-500 text-sm flex gap-1">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span>{">"}</span>
          <span className="text-gray-800 font-medium">Shop</span>
        </nav>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {categories.map((img, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-[250px] rounded-lg overflow-hidden"
          >
            <img
              src={img}
              alt={`category-${index + 1}`}
              className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 text-sm text-center md:text-left">
        <span className="text-gray-600">Showing all 12 results</span>

        <div className="flex justify-center gap-2 md:items-center">
          <span className="text-gray-600">Views:</span>
          <button className="p-2 border rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 12h4v4H4v-4zm6
                0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 18h4v4H4v-4zm6
                0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
            </svg>
          </button>
          <button className="p-2 border rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center flex-row gap-2">
          <select className="border rounded px-3 py-2 text-gray-600">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`text-center flex flex-col items-center ${index > 3 ? "hidden md:flex" : ""}`}
          >
            <img
              src={product.image}
              alt={`product-${product.id}`}
              className="w-full h-96 object-cover mb-4 rounded-lg"
            />
            <h3 className="font-semibold">Graphic Design</h3>
            <p className="text-gray-500 text-sm">English Department</p>

            <div className="mt-2">
              <span className="text-gray-400 line-through mr-2">$16.48</span>
              <span className="text-blue-600 font-bold">$6.48</span>
            </div>

            <div className="flex justify-center space-x-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-teal-500"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              <span className="w-4 h-4 rounded-full bg-gray-700"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex border rounded-md overflow-hidden shadow">
          <button className="px-6 py-3 text-gray-400 border-r hover:bg-gray-100 cursor-pointer">
            First
          </button>
          <button className="px-6 py-3 border-r hover:bg-gray-100 cursor-pointer">
            1
          </button>
          <button className="px-6 py-3 border-r bg-blue-500 text-white font-bold hover:bg-blue-600 cursor-pointer">
            2
          </button>
          <button className="px-6 py-3 border-r hover:bg-gray-100 cursor-pointer">
            3
          </button>
          <button className="px-6 py-3 text-blue-500 hover:bg-gray-100 cursor-pointer">
            Next
          </button>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-12">
          {sponsorIcons.map((Icon, i) => (
            <Icon
              key={i}
              className="h-16 w-16 opacity-70 hover:opacity-100 transition text-gray-600 mx-auto"
            />
          ))}
        </div>
      </section>
    </section>
  );
}
