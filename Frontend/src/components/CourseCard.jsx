import React from "react";

function CourseCard({ course }) {
  return (
    <div className="course-card relative p-4 border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="course-title text-xl font-bold mb-2">{course.title}</h3>
      <p className="course-description text-gray-700 mb-4">{course.description}</p>
      <p className="course-price text-pink-600 font-semibold">Price: ${course.price}</p>
      <button className="course-button absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:bg-pink-600 bg-pink-500 text-white py-2 px-4 rounded-full">
        Add to Cart
      </button>
    </div>
  );
}

export default CourseCard;
