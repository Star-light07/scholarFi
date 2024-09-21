import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractABI from '../contractABI.json'; // Ensure ABI is correctly imported

const CourseView = ({ courseId }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractAddress = '0xYourActualContractAddress'; // Replace with your smart contract address

  // Dummy course data (you can replace this with real data from an API or database)
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
    incentivePrize: "100 Reward Tokens" // Prize for completing the course
  };

  // Connect to wallet and set the user's account
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
      alert('MetaMask is required to interact with this application. Please install it.');
    }
  };

  // Complete the course and trigger the smart contract function
  const completeCourse = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const tx = await contract.completeCourse(courseId); // Call the smart contract function
        await tx.wait(); // Wait for transaction confirmation
        alert(`Course completed! You've been rewarded with ${courseDetails.incentivePrize}.`);
      } catch (error) {
        console.error("Error completing course: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please connect MetaMask');
    }
  };

  // Mint NFT Certificate
  const mintCertificate = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const tx = await contract.mintCertificateNFT(courseId); // Call the smart contract function for minting NFT
        await tx.wait(); // Wait for transaction confirmation
        alert("Certificate NFT minted successfully!");
      } catch (error) {
        console.error("Error minting NFT: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please connect MetaMask');
    }
  };

  // Connect wallet on component mount
  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-primary">{courseDetails.title}</h2>
              <p className="card-text">{courseDetails.description}</p>

              {/* Mint Certificate Button */}
              <button className="btn btn-success btn-block mb-3" onClick={mintCertificate} disabled={loading}>
                {loading ? 'Minting...' : 'Mint Certificate NFT'}
              </button>

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

              {/* Incentive Prize Section */}
              <h4 className="text-danger">Incentive Prize</h4>
              <p className="font-weight-bold">{courseDetails.incentivePrize}</p>

              <button className="btn btn-primary btn-block" onClick={completeCourse} disabled={loading}>
                {loading ? 'Processing...' : 'Complete Course'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
