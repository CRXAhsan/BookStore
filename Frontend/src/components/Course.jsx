import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import CourseCard from "./CourseCard";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  // Hardcoded courses data
  const courses = [
    { id: 1, title: "React for Beginners", description: "Learn the basics of React in this comprehensive course.", price: 49.99 },
    { id: 2, title: "Advanced React", description: "Take your React skills to the next level with advanced concepts.", price: 79.99 },
    { id: 3, title: "JavaScript Essentials", description: "Master the fundamentals of JavaScript, the language of the web.", price: 39.99 },
    { id: 4, title: "CSS Flexbox and Grid", description: "Learn how to build responsive layouts using Flexbox and Grid.", price: 29.99 },
    { id: 5, title: "Node.js Fundamentals", description: "Understand the basics of Node.js for backend development.", price: 59.99 },
    { id: 6, title: "Full-Stack Development", description: "Become a full-stack developer with this all-inclusive course.", price: 99.99 },
    { id: 7, title: "Vue.js for Beginners", description: "Learn how to build web applications using Vue.js.", price: 49.99 },
    { id: 8, title: "Python Programming", description: "Get started with Python programming and its applications.", price: 39.99 },
    { id: 9, title: "Django for Web Development", description: "Build robust web applications using Django.", price: 69.99 },
    { id: 10, title: "Database Management", description: "Learn about database management systems and SQL.", price: 29.99 }
  ];

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>We're delighted to have you <span> Here! :)</span></h1>
          <p className="description">
            
          </p>
          {/* <Link to="/">
            <button className="button">Back</button>
          </Link> */}
        </div>
        <div className="grid-container">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <div className="course-section">
          <h1 className="course-heading">Our Courses</h1>
          <div className="grid-container">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        <div className="heading">
        <Link to="/">
            <button className="button">Back</button>
          </Link>
        </div>
        
      </div>
    </>
  );
}

export default Course;
