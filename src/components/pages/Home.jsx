import React from "react";
import Hero from "../Hero";

import Collections from "../Collections";
import SpecialProducts from "../SpecialProducts";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <SpecialProducts />
      <Banner />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
