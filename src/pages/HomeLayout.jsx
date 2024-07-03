import React from "react";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import BottomPage from "./BottomPage";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <section id="home">
        <Homepage />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section id="bottom">
        <BottomPage />
      </section>
    </div>
  );
};

export default HomeLayout;
