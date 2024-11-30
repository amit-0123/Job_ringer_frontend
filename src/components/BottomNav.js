import React from "react";
import "./BottomNav.css";


const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <button className="nav-icon">
        <i className="fas fa-bars"></i> 
        </button>
        <span>Menu</span>
      </div>
      <div className="nav-item">
        <button className="nav-icon">
        <i className="fas fa-user"></i> 
        </button>
        <span>Login</span>
      </div>
      <div className="nav-item">
        <button className="nav-icon">
        <i className="fas fa-home"></i>
        </button>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <button className="nav-icon">
        <i className="fas fa-briefcase"></i>
        </button>
        <span>Jobs</span>
      </div>
      <div className="nav-item">
      <button className="nav-icon rotate-icon">
  <i className="fas fa-share"></i> {/* Rotated Share Icon */}
</button>
        <span>Back</span>
      </div>
    </div>
  );
};

export default BottomNav;
