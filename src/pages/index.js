import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <main className="fillHeight">
        <Hero />
        <About />
      </main>
    </Layout>
  );
};

export default IndexPage;
