import React from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import logo from '../assets/logo2-removebg-preview.png';

const Navbar = ({ account, setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    
    <nav className="navbar navbar-expand-lg border-bottom navbar-light bg-secondary">
      <div className="container">
        <img src={logo} alt="ScholarShip Logo" height={100} className="logo" />
        <Link className="navbar-brand" to="/">ScholaFi</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            {/* Profile Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
          {account ? (
            <span className="navbar-text ms-auto">{account.slice(0, 6)}...{account.slice(-4)}</span>
          ) : (
            <button className="btn btn-warning ms-auto" onClick={connectWallet}>Connect Wallet</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
