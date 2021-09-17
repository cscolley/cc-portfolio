import React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <meta property="og:title" content="Chris Colley - Web Developer" />
    <meta
      property="og:description"
      content="Exciting content coming soon! Currently under construction"
    />
    <meta property="og:image" content="../images/og-image1.png" />
    <meta property="og:url" content="https://www.chriscolley.com.au" />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default Head;
