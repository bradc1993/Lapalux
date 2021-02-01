import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LapaluxOne from "../images/lapalux-1.jpg"
import LapaluxTwo from "../images/lapalux-2.jpg"
import LapaluxThree from "../images/lapalux-3.jpg"

const TestPage = () => {
  return (
    <Layout>
      <div className="about">
        <div className="about-paragraph">
          <p>
            Lapalux (aka Stuart Howard) returns to Flying Lotus’ Brainfeeder for
            his fourth album. “Amnioverse”—“a sort of portmanteau of the
            amniotic sac and the universe,” he explains—revolves around notions
            of fluidity; that birth, life, death, and rebirth is a never ending
            continuum.
          </p>
          <p>
            He channels these ethereal ideas through a new and ever-expanding
            modular synth set-up, injecting human emotion, and layering
            recordings of weather, wind, rain and fire, lending an elemental,
            celestial feel to the composition. While 2017’s “Ruinism” was about
            sonic wreckage and deconstruction, with “Amnioverse”, Howard took a
            different approach, basing each track around a snippet of spoken
            word from “friends, lovers, and ex partners”, and building the music
            around it. He also reconnects with Icelandic vocalist JFDR (Jófríður
            Ákadóttir) who returns for two tracks on ’Thin Air’ and ‘The Lux
            Quadrant’, as well as vocalist Lilia on ‘Limb To Limb’, ‘Voltaic
            Acid’ and ‘Momentine’. “For me the real focus was that the whole
            record flowed,” he says. ”I worked on each song sequentially and
            wouldn’t stop working on a session until they fitted together and
            told the story that I wanted to tell.”
          </p>
          <p>
            Initial inspiration for the album came from a photograph of James
            Turrell’s Twilight Epiphany Skyspace installation in Texas. “I
            looked at it every day for three years whilst making this record.”
            explains Howard, “People are sitting in what looks like a waiting
            room lit in a purple hue, looking up at the dark night sky through a
            rectangular hole in the ceiling. The image has so much depth and
            means so much to me.... it seems like we are all in that waiting
            room, waiting to be somewhere or go somewhere. That’s what I tried
            to encapsulate in this record.”
          </p>
          <p>
            Turrell's influence extends to the album cover too, itself an homage
            to the artist’s groundbreaking work with light, shadow and
            perspective. Conceived by Creative Director and photographer Dan
            Medhurst and Owen Gildersleeve—an expert in hand-crafted
            illustration and set design—the build stemmed from a vision that
            Howard imagined: “I initially had an idea of a person, or group of
            people, in an impossibly large room set in a fog of pink looking
            into a void symbolic of a womb or amniotic sac,” he says. “We then
            ran with the idea of making a structure that had a deeper
            perspective, the ever decreasing octagon shape that suggests a sort
            of birth canal into the unknown.”
          </p>
          <p>
            Support for Lapalux has come from the likes of Pitchfork, Mixmag,
            FADER, FACT, Dazed, SPIN, The Wire, A.V. Club and many more. With
            Benji B, Huw Stephens, Lauren Laverne, Mary-Anne Hobbs and many
            others championing his music across radio.
          </p>
          <p>
            Capping off last year with two standout performances at the
            Brainfeeder X showcase at Brixton Academy, and alongside Jacques
            Greene at Brooklyn’s Elsewhere, Lapalux is set to return with a new
            live-AV show—driven and delivered by his modular gear set-up—to
            present a cohesive light, projection and sound performance. 
          </p>
        </div>
        <div className="about-images">
          <img id="image-1" src={LapaluxOne} alt="Lapalux standing." />
          <img id="image-2" src={LapaluxTwo} alt="Lapalux sitting." />
          <img id="image-3" src={LapaluxThree} alt="Lapalux headshot." />
        </div>
      </div>
    </Layout>
  )
}

export default TestPage
