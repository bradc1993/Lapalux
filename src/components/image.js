import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
// import { motion } from "framer-motion"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      lapalux1: file(relativePath: { eq: "lapalux-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      turrell: file(relativePath: { eq: "turrell.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amnio2: file(relativePath: { eq: "amnio-2.jpg" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amnio1: file(relativePath: { eq: "amnio-1.jpg" }) {
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amnio3: file(relativePath: { eq: "amnio-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amnioCover: file(relativePath: { eq: "amnio-cover.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lapalux1dt: file(relativePath: { eq: "lapalux-1.jpg" }) {
        childImageSharp {
          fluid(
            quality: 95
            duotone: { highlight: "#f00e2e", shadow: "#192550" }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  return (
    <>
      {src === 1 ? (
        <Img
          fluid={data.lapalux1.childImageSharp.fluid}
          alt="Lapalux standing."
          className="about-img-1"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : src === 2 ? (
        <Img
          fluid={data.turrell.childImageSharp.fluid}
          alt="James Turrell's Twilight Epiphany Skyspace installation."
          className="about-img-2"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : src === 3 ? (
        <Img
          fluid={data.amnio2.childImageSharp.fluid}
          alt="Making of Amnioverse cover."
          className="about-img-3"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : src === 4 ? (
        <Img
          fluid={data.amnio1.childImageSharp.fluid}
          alt="Making of Amnioverse cover."
          className="about-img-4"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : src === 5 ? (
        <Img
          fluid={data.amnio3.childImageSharp.fluid}
          alt="Making of Amnioverse cover."
          className="about-img-5"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : src === 6 ? (
        <Img
          fluid={data.amnioCover.childImageSharp.fluid}
          alt="Amnioverse cover."
          className="about-img-6"
          imgStyle={{ objectFit: "contain" }}
        />
      ) : null}
    </>
  )
}

export default Image
