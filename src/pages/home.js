import Contact from "../components/Contact";
import Discover from "../components/Discover";
import Features from "../components/Features";
import Header from "../components/Header";
import React from "react";

export const Home = () => {
  return (
    <div>
      <Header />
      <Discover />
      <Features />
      <Contact />
    </div>
  );
};
