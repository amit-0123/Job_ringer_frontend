// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>
//           job<span>Ringer</span>
//         </h1>
//         <p>India's Job Portal</p>
//       </div>
//       <nav>
//         <a href="/">Jobs</a>
//         <a href="/">Active Employers</a>
//         <a href="/">Pricing</a>
//         <button className="login-btn">Employer Login</button>
//       </nav>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>
          job<span>Ringer</span>
        </h1>
        <p>India's Job Portal</p>
      </div>

    
      <div className="bring-job">
            <p>BRINGING YOU <span>THE PERFECT JOB</span></p>
      </div>
 

      <button className="hamburger" onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
      </button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="/">Jobs</a>
        <a href="/">Active Employers</a>
        <a href="/">Pricing</a>
        <button className="login-btn1">Jobseeker Login</button>
        <button className="login-btn2">Employer Login</button>

      </nav>
    </header>
  );
};

export default Header;

