import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseView from './components/CourseView';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import Profile from './components/Profile'; // Import the Profile component

const App = () => {
  const [account, setAccount] = useState(null);

  return (
    <Router>
      <Navbar account={account} setAccount={setAccount} />
      <Routes>
        <Route path="/" element={<LandingPage account={account} />} />
        <Route path="/courses" element={<CoursesPage account={account} />} />
        <Route path="/course/:id" element={<CourseView />} />
        <Route path="/profile" element={<Profile account={account} />} /> {/* Add Profile route */}
      </Routes>
    </Router>
  );
};

export default App;
