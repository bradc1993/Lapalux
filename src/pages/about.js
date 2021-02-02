import React, { useEffect } from "react"
import { InView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HorizontalScroll from "../components/horizontal-scroll"
import LapaluxOne from "../images/lapalux-1.jpg"
import LapaluxTwo from "../images/lapalux-2.jpg"
import Turrell from "../images/turrell.jpg"
import LapaluxThree from "../images/lapalux-3.jpg"
import AmnioOne from "../images/amnio-1.jpg"
import AmnioTwo from "../images/amnio-2.jpg"
import AmnioThree from "../images/amnio-3.jpg"
import AmnioCover from "../images/amnio-cover.jpg"

const AboutPage = () => {
  return (
    <div className="about">
      <HorizontalScroll>
        <div className="about-container">
          <div className="about-section" key="about-section-1">
            <img id="image-1" src={LapaluxOne} alt="Lapalux standing." />
            <p className="about-paragraph">
              Lapalux (aka Stuart Howard) returns to Flying Lotus’ Brainfeeder
              for his fourth album. “Amnioverse”—“a sort of portmanteau of the
              amniotic sac and the universe,” he explains—revolves around
              notions of fluidity; that birth, life, death, and rebirth is a
              never ending continuum. He channels these ideas through a modular
              synth set-up, weaving human emotion and temporal field recordings
              into the record, all of which lend a tangible, ethereal feel to
              its technical composition.
            </p>
          </div>
          <div className="about-section" key="about-section-2">
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.img
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : null}
                  transition={{ duration: 0.8 }}
                  id="image-3"
                  src={Turrell}
                  alt="James Turrell's Twilight Epiphany Skyspace installation."
                />
              )}
            </InView>
            <InView threshold={0.25}>
              {({ ref, inView }) => (
                <motion.p
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  // initial="hidden"
                  // variants={variants}
                  className="about-paragraph"
                >
                  Initial inspiration for the album came from a photograph of
                  James Turrell’s Twilight Epiphany Skyspace installation in
                  Texas. “I looked at it every day for three years whilst making
                  this record.” explains Howard, “People are sitting in what
                  looks like a waiting room lit in a purple hue, looking up at
                  the dark night sky through a rectangular hole in the ceiling.
                  The image has so much depth and means so much to me.... it
                  seems like we are all in that waiting room, waiting to be
                  somewhere or go somewhere. That’s what I tried to encapsulate
                  in this record.”
                </motion.p>
              )}
            </InView>
          </div>
          <div className="about-section" key="about-section-3">
            <div className="about-image-grid">
              <img
                id="grid-img-1"
                src={AmnioOne}
                alt="Making of Amnioverse cover."
              />
              <img
                id="grid-img-2"
                src={AmnioTwo}
                alt="Making of Amnioverse cover."
              />
              <img
                id="grid-img-3"
                src={AmnioThree}
                alt="Making of Amnioverse cover."
              />
            </div>
            <p className="about-paragraph">
              Turrell's influence extends to the album cover too, itself an
              homage to the artist’s groundbreaking work with light, shadow and
              perspective. Conceived by Creative Director and photographer Dan
              Medhurst and Owen Gildersleeve—an expert in hand-crafted
              illustration and set design—the build stemmed from a vision that
              Howard imagined: “I initially had an idea of a person, or group of
              people, in an impossibly large room set in a fog of pink looking
              into a void symbolic of a womb or amniotic sac,” he says. “We then
              ran with the idea of making a structure that had a deeper
              perspective, the ever decreasing octagon shape that suggests a
              sort of birth canal into the unknown.”
            </p>
          </div>
          <div
            className="about-section"
            id="last-section"
            key="about-section-4"
          >
            <img
              id="image-4"
              src={AmnioCover}
              alt="James Turrell's Twilight Epiphany Skyspace installation."
            />
            <div className="ending-section">
              <p className="about-paragraph">
                Support for Lapalux has come from the likes of Pitchfork,
                Mixmag, FADER, FACT, Dazed, SPIN, The Wire, A.V. Club and many
                more. With Benji B, Huw Stephens, Lauren Laverne, Mary-Anne
                Hobbs and many others championing his music across radio.
              </p>
              <a
                className="about-btn-wrapper"
                href="https://lapalux.lnk.to/amnioverse"
                target="_blank"
                rel="noreferrer"
              >
                <button className="about-btn">
                  <h5 style={{ color: "black" }}>BUY/STREAM</h5>
                </button>
              </a>
            </div>
          </div>
          {/* <div className="end-section" key="about-section-4">
              <img id="image-4" src={AmnioCover} alt="Amnioverse cover." />
              <button className="about-btn">
                <h4 style={{ color: "black" }}>BUY/STREAM</h4>
              </button>
            </div> */}
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default AboutPage
