import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Tech from "../components/sections/Tech";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <main className="fillHeight">
        <Hero />
        <About />
        <Tech />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;
