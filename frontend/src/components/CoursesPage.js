import React from "react";
import './CoursesPage.css'; // Custom styles for courses
import './CoursesPage.css';  // Ensure this line is at the top of your file


const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Blockchain Basics",
      description: "Learn the foundations of blockchain technology and its applications.",
      sponsor: "Tech Corp",
      reward: "0.0117575 ETH(R500)"
    },
    {
      id: 2,
      title: "Smart Contracts on Ethereum",
      description: "Master the art of creating decentralized smart contracts on the Ethereum blockchain.",
      sponsor: "Finance Inc.",
      reward: "0.023515 ETH(R1000)"
    },
    {
      id: 3,
      title: "Introduction to Web3",
      description: "A comprehensive guide to building decentralized applications.",
      sponsor: "Innovate Labs",
      reward: "0.0117575 ETH(R500)"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p><strong>Sponsor:</strong> {course.sponsor}</p>
                <p className="text-success"><strong>Reward:</strong> {course.reward}</p>
                <a href={`/course/${course.id}`} className="btn btn-primary">View Course</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
