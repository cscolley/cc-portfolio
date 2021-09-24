import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tech from "../components/Tech";

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
