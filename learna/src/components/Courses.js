import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    { id: 1, title: 'Introduction to Blockchain', description: 'Learn the basics of blockchain technology.' },
    { id: 2, title: 'Ethereum and Smart Contracts', description: 'Dive into Ethereum and its smart contract functionality.' },
    { id: 3, title: 'Solidity Programming', description: 'Master Solidity and build decentralized applications.' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-primary btn-block">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
