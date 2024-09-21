import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../contractABI.json';

const CourseView = ({ courseId }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractAddress = '0xYourActualContractAddress';

  const courseDetails = {
    title: "Mastering Ethereum Smart Contracts",
    description: "In this course, you'll learn everything about Ethereum and how to write smart contracts in Solidity.",
    duration: "6 weeks",
    prerequisites: "Basic understanding of JavaScript and blockchain concepts.",
    currentModule: "Introduction to Solidity",
    upcomingModules: [
      "Advanced Smart Contracts",
      "Deploying Contracts to Testnet",
      "Interacting with DApps",
      "Building a Frontend for Your DApp",
      "Security Best Practices in Smart Contracts"
    ],
    incentivePrize: "100 Reward Tokens"
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setAccount(await signer.getAddress());
      } catch (error) {
        console.error("Error connecting to wallet: ", error);
      }
    } else {
      alert('MetaMask is required to interact with this application.');
    }
  };

  const completeCourse = async () => {
    // Logic for completing the course
  };

  const mintCertificate = async () => {
    // Logic for minting the NFT certificate
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              {/* Staking Button */}
              <button className="btn btn-secondary mb-3" onClick={() => console.log('Stake clicked')}>
                Stake Before Starting
              </button>

              <h2 className="card-title text-primary">{courseDetails.title}</h2>
              <p className="card-text">{courseDetails.description}</p>

              <h4 className="text-success">Course Details</h4>
              <p><strong>Duration:</strong> {courseDetails.duration}</p>
              <p><strong>Prerequisites:</strong> {courseDetails.prerequisites}</p>

              <h4 className="text-info">Current Module: {courseDetails.currentModule}</h4>
              <p>You're currently learning about: {courseDetails.currentModule}</p>
              
              <h5 className="text-warning">Upcoming Modules</h5>
              <ul className="list-group mb-4">
                {courseDetails.upcomingModules.map((module, index) => (
                  <li key={index} className="list-group-item list-group-item-light">
                    {module}
                  </li>
                ))}
              </ul>

              <h4 className="text-danger">Incentive Prize</h4>
              <p className="font-weight-bold">{courseDetails.incentivePrize}</p>

              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={completeCourse} disabled={loading}>
                  {loading ? 'Processing...' : 'Complete Course'}
                </button>
                <button className="btn btn-success" onClick={mintCertificate}>
                  Mint NFT Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
