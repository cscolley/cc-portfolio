import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import sr from "../utils/sr";
import { srConfig } from "../config";
import { StaticImage } from "gatsby-plugin-image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

if (typeof window !== "undefined") {
  // install Swiper modules
  SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);
}

const Wrapper = styled.section`
  max-width: 900px;
`;

const Experience = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Wrapper id="experience" ref={revealContainer}>
      <div className="section-header">Experience</div>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <StaticImage
                className="img"
                src="../images/agilent-technologies-logo.jpg"
                alt="Agilent Technologies Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>Software QA Engineer</h2>
              <h3>Agilent Technologies, Melbourne, Australia</h3>
              <h4>(Dec 2018 - Dec 2019)</h4>
              <ul>
                <li>
                  Lead automation and end-to-end workflow testing project stream
                  by managing, designing and developing end-to-end Selenium
                  tests, coding in C#.
                </li>
                <li>
                  Fixed software defects, contributing to the project codebase.
                </li>
                <li>Worked within a medium sized Scrum team.</li>
                <li>
                  Software utilised included SourceTree, GIT, Jira, Visual
                  Studio, WebStorm and GoCD.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <StaticImage
                className="img"
                src="../images/agilent-technologies-logo.jpg"
                alt="Agilent Technologies Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>NPI Product Manager</h2>
              <h3>Agilent Technologies, Melbourne, Australia</h3>
              <h4>(Feb 2012 - Feb 2017)</h4>
              <ul>
                <li>
                  As the Product Manager for New Product Introductions within
                  the Molecular Spectroscopy division (&gt;US$80m annual
                  revenue) I was responsible for the successful delivery of new
                  software and hardware products leading to significant business
                  growth and increased market share.
                </li>
                <li>
                  Acting as Product Owner embedded within a Scrum Agile team I
                  was responsible for software specifications, UI/UX design and
                  the translation of specifications into stories with acceptance
                  criteria.
                </li>
                <li>
                  I prioritised stories and defects working within a
                  cross-functional team.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <StaticImage
                className="img"
                src="../images/agilent-technologies-logo.jpg"
                alt="Agilent Technologies Logo"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
            <div className="myText">
              <h2>Technical Marketing (Product Specialist)</h2>
              <h3>Agilent Technologies, Melbourne, Australia</h3>
              <h4>(Feb 2008 - Feb 2012)</h4>
              <ul>
                <li>
                  Strong client and stakeholder interface allowed me to support
                  software and hardware development projects as a technical SME.
                </li>
                <li>
                  I worked with R&amp;D teams to ensure that products were
                  developed according to spec such that they met customer needs.
                </li>
                <li>
                  Created high quality marketing materials and technical
                  documentation for new products. Also, produced training
                  material, delivering presentations to customers and sales
                  teams.
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Experience;
