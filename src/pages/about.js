import React from "react"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import HorizontalScroll from "../components/horizontal-scroll"
import LapaluxOne from "../images/lapalux-1.jpg"
// import LapaluxTwo from "../images/lapalux-2.jpg"
import Turrell from "../images/turrell.jpg"
// import LapaluxThree from "../images/lapalux-3.jpg"
import AmnioOne from "../images/amnio-1.jpg"
import AmnioTwo from "../images/amnio-2.jpg"
import AmnioThree from "../images/amnio-3.jpg"
import AmnioCover from "../images/amnio-cover.jpg"

const AboutPage = () => {
  const globalThreshold = 0.5

  //Framer Motion variants:
  const fadeIn = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  }
  const fadeUp = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 10, transition: { duration: 0.5 } },
  }
  const gridParent = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
  }
  const gridItemTop = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: -5, transition: { duration: 0.5 } },
  }
  const gridItemBottom = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 10, transition: { duration: 0.5 } },
  }
  const gridItemRight = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, x: 10, transition: { duration: 0.5 } },
  }
  //END

  return (
    <div className="about">
      <HorizontalScroll>
        <div className="about-container">
          <InView threshold={globalThreshold}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="about-section"
                key="about-section-1"
              >
                <img id="image-1" src={LapaluxOne} alt="Lapalux standing." />
                <p className="about-paragraph">
                  Lapalux (aka Stuart Howard) returns to Flying Lotus’
                  Brainfeeder for his fourth album. “Amnioverse”—“a sort of
                  portmanteau of the amniotic sac and the universe,” he
                  explains—revolves around notions of fluidity; that birth,
                  life, death, and rebirth is a never ending continuum. He
                  channels these ideas through a modular synth set-up, weaving
                  human emotion and temporal field recordings into the record,
                  all of which lend a tangible, ethereal feel to its technical
                  composition.
                </p>
              </motion.div>
            )}
          </InView>
          <div className="about-section" key="about-section-2">
            <InView threshold={0.4}>
              {({ ref, inView }) => (
                <motion.img
                  ref={ref}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  id="image-3"
                  src={Turrell}
                  alt="James Turrell's Twilight Epiphany Skyspace installation."
                />
              )}
            </InView>
            <InView threshold={globalThreshold}>
              {({ ref, inView }) => (
                <motion.p
                  ref={ref}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
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
            <InView threshold={0.4}>
              {({ ref, inView }) => (
                <motion.div
                  className="about-image-grid"
                  ref={ref}
                  variants={gridParent}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.img
                    id="grid-img-2"
                    src={AmnioTwo}
                    alt="Making of Amnioverse cover."
                    variants={gridItemBottom}
                  />
                  <motion.img
                    id="grid-img-1"
                    src={AmnioOne}
                    alt="Making of Amnioverse cover."
                    variants={gridItemTop}
                  />
                  <motion.img
                    id="grid-img-3"
                    src={AmnioThree}
                    alt="Making of Amnioverse cover."
                    variants={gridItemRight}
                  />
                </motion.div>
              )}
            </InView>
            <InView threshold={0.5}>
              {({ ref, inView }) => (
                <motion.p
                  ref={ref}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="about-paragraph"
                >
                  Turrell's influence extends to the album cover too, itself an
                  homage to the artist’s groundbreaking work with light, shadow
                  and perspective. Conceived by Creative Director and
                  photographer Dan Medhurst and Owen Gildersleeve—an expert in
                  hand-crafted illustration and set design—the build stemmed
                  from a vision that Howard imagined: “I initially had an idea
                  of a person, or group of people, in an impossibly large room
                  set in a fog of pink looking into a void symbolic of a womb or
                  amniotic sac,” he says. “We then ran with the idea of making a
                  structure that had a deeper perspective, the ever decreasing
                  octagon shape that suggests a sort of birth canal into the
                  unknown.”
                </motion.p>
              )}
            </InView>
          </div>
          <div
            className="about-section"
            id="smaller-section"
            key="about-section-4"
          >
            <InView threshold={0.4}>
              {({ ref, inView }) => (
                <motion.img
                  ref={ref}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  id="image-4"
                  src={AmnioCover}
                  alt="James Turrell's Twilight Epiphany Skyspace installation."
                />
              )}
            </InView>
            <InView threshold={0.4}>
              {({ ref, inView }) => (
                <div id="end-parent-grid">
                  <motion.p
                    ref={ref}
                    variants={fadeIn}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="about-paragraph"
                  >
                    Support for Lapalux has come from the likes of Pitchfork,
                    Mixmag, FADER, FACT, Dazed, SPIN, The Wire, A.V. Club and
                    many more. With Benji B, Huw Stephens, Lauren Laverne,
                    Mary-Anne Hobbs and many others championing his music across
                    radio.
                  </motion.p>
                  {/* <motion.p className="review-paragraph">
                    "...anchored in a softness rich in texture and weighty with
                    emotion."
                    <br /> - <span className="critic">EXCLAIM</span>
                  </motion.p> */}
                  {/* <motion.p className="review-paragraph">
                    "...an ambitious, striking record that seems to assess the
                    entirety of existence, and it's hard not to feel moved by
                    it."
                    <br /> - <span className="critic">ALLMUSIC</span>
                  </motion.p> */}
                  <div className="about-btn-grid">
                    <motion.a
                      className="about-link-wrapper"
                      href="https://lapalux.lnk.to/amnioverse"
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, scale: 1.12 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 1.12 }
                      }
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <button className="circle-btn">
                        <h5 style={{ color: "black", whiteSpace: "nowrap" }}>
                          BUY/STREAM
                        </h5>
                      </button>
                    </motion.a>
                    {/* <Link to="/" className="about-link-wrapper">
                      <button className="back-btn">
                        <h5 style={{ color: "black", whiteSpace: "nowrap" }}>
                          go back
                        </h5>
                      </button>
                    </Link> */}
                  </div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default AboutPage
