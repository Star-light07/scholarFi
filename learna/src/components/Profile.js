import React, { useState } from 'react';

const Profile = ({ account }) => {
  const [coursesCompleted, setCoursesCompleted] = useState(3); // Replace 3 with actual logic later

  const handleSignOut = () => {
    console.log('User signed out');
    // Add sign-out logic here, e.g., clear the account state, redirect, etc.
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Profile</h3>

              {/* Profile Image */}
              <div className="text-center mb-4">
                <img 
                  src="https://via.placeholder.com/150" // Placeholder image URL, replace with actual profile picture
                  alt="Profile" 
                  className="rounded-circle img-fluid" 
                  style={{ width: '150px', height: '150px' }} 
                />
              </div>

              {/* Account Address */}
              <p className="text-center"><strong>Account Address:</strong> {account ? account : 'Not connected'}</p>

              {/* Course Completion */}
              <p className="text-center"><strong>Courses Completed:</strong> {coursesCompleted}</p>

              {/* Sign Out Button */}
              <button 
                className="btn btn-danger btn-block" 
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
