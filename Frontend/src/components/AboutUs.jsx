import React from "react";

function AboutUs() {
  return (
    <div className="bg-slate-800 text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-slate-700 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">Vision Statement</h2>
            <p className="text-lg">
              Our vision is to create a world where anyone, anywhere has the power
              to transform their life through learning. We believe in the power of
              education to build a better future and are committed to providing
              accessible, affordable, and high-quality learning experiences to
              people around the globe.
            </p>
          </div>
          <div className="p-6 bg-slate-700 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6">Mission Statement</h2>
            <p className="text-lg">
              Our mission is to democratize education by offering a diverse range
              of online courses that empower individuals to achieve their
              personal and professional goals. We strive to foster a supportive
              and inclusive learning community where everyone has the opportunity
              to succeed.
            </p>
          </div>
        </section>

        <section className="mb-16 p-6 bg-slate-700 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Our Courses</h2>
          <p className="text-lg mb-4">
            We offer a wide range of courses designed to help you learn and grow.
            Whether you're looking to advance your career, learn a new skill, or
            simply explore a new hobby, we have something for you. Our courses
            are taught by experienced professionals and cover a variety of
            topics, including technology, business, arts, and more.
          </p>
          <ul className="list-disc list-inside pl-4 text-white">
            <li className="mb-2">Technology and Programming</li>
            <li className="mb-2">Business and Management</li>
            <li className="mb-2">Arts and Creativity</li>
            <li className="mb-2">Health and Wellness</li>
            <li className="mb-2">Personal Development</li>
          </ul>
        </section>
        

        <section className="p-6 bg-slate-700 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Our Details</h2>
          <p className="text-lg mb-4">
            At our educational platform, we believe in the power of knowledge and the transformative potential of education. We are dedicated to providing high-quality, accessible, and affordable learning opportunities to individuals from all walks of life. Our diverse range of courses, taught by experienced professionals, covers a variety of topics including technology, business, arts, health, and personal development. Join us on this journey of learning and growth, and unlock your potential with our comprehensive educational resources.
          </p>
          <p className="text-lg">
            Our team is committed to fostering a supportive and inclusive learning environment. We strive to create a community where everyone feels welcome and empowered to achieve their goals. Thank you for choosing our platform for your educational journey. Together, we can build a brighter future through the power of learning.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
