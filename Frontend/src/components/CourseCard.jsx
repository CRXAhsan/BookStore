import React from "react";

function CourseCard({ course }) {
  return (
    <div className="relative p-6 bg-slate-800 border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-bold mb-2 white">{course.title}</h3>
      <p className="text-gray-500 mb-4">{course.description}</p>
      <p className="text-pink-600 font-semibold mb-4">Price: ${course.price}</p>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">Preview</button>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors">Add to Cart</button>
      </div>
    </div>
  );
}

export default CourseCard;
