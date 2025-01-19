import React from "react";

import Section1 from "./Hero";
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import RecentWorks from "./RecentWorks";
import Clients from "./Clients";
import Contact from "./Contact";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero />
      <About />
      <Service />
      <WhyChooseUs />

      <RecentWorks />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
