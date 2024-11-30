import React from "react";
import Header from "./components/Header";
import FeaturedJobs from "./components/FeaturedJobs";

import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav"; // Import the new BottomNav component
import RemoteJobs from "./components/RemoteJobs";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <main>
        <FeaturedJobs/>
        <RemoteJobs />
      </main>
      <Footer/>
      <BottomNav/>
    </div>
  );
};

export default App;
