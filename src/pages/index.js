import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import AlbumDisplay from "../components/album-display"
import Album from "../components/album"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AlbumDisplay>
      <Album />
    </AlbumDisplay>
  </Layout>
)

export default IndexPage
