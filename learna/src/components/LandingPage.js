import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LandingPage.css'; // Custom styles

const LandingPage = ({ account }) => {
  const navigate = useNavigate(); // Declare navigate

  const handleViewCourse = (courseId) => {
    navigate(`/course/${courseId}`); // Use navigate to go to the course view
  };

  return (
    <div className="container-fluid bg-secondary p-0">
      {/* Hero Section */}
      <div className="jumbotron text-center text-white bg-muted py-5">
  <h1 className="display-4 text-warning">Empowering You to Master Web3 Technologies</h1>
  <p className="text-center text-warning">Account: {account ? account : 'Not connected'}</p>
  <p className="lead">
  Join the decentralized future! Learn blockchain, smart contracts, and dApp development through hands-on courses. Earn rewards like tokens, NFTs, and certificates upon completion. Whether you're a beginner or an expert, connect your wallet, start learning, and unlock the world of Web3 today!  </p>
  <button 
    className="btn btn-warning btn-lg mt-3" 
    onClick={() => handleViewCourse(1)}
  >
    Start Learning Now
  </button>
</div>


      {/* Courses Section */}
      <div className="container bg-secondary  mt-5">
        <h2 className="text-center text-warning mb-4">Our Courses</h2>

        <div className="row">
          {/* Course Card 1 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 1</h5>
                <p className="card-text">An introduction to blockchain technology and its applications.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(1)} // Navigate to Course 1
                >
                  View Course
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 2</h5>
                <p className="card-text">Learn about Ethereum smart contracts and dApp development.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(2)} // Navigate to Course 2
                >
                  View Course
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Course 3</h5>
                <p className="card-text">Master Solidity and build your first decentralized application.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCourse(3)} // Navigate to Course 3
                >
                  View Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-secondary mt-5">
  <h2 className="text-center text-warning mb-4">Earn While You Learn</h2>
  <p className="text-center text-white lead">
    Complete courses, achieve milestones, and unlock exclusive rewards. 
    Earn tokens, NFTs, and more as you master Web3 skills.
  </p>

  <div className="row text-center">
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">100 Reward Tokens</h5>
          <p className="card-text">Earn tokens by completing our curated courses.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">NFT Certificate</h5>
          <p className="card-text">Mint your certificate upon course completion.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Exclusive Content Access</h5>
          <p className="card-text">Unlock premium learning materials for advanced courses.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>

    
  );
};

export default LandingPage;
