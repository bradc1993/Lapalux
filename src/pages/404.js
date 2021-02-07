import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <SEO title="404: Not found" />
    <h3>
      404 <h4 style={{ fontSize: "1.8rem" }}>not found</h4>
      <br />
      <Link to="/">
        <h3 style={{ position: "relative", top: "2.5vh" }}>HOME</h3>
      </Link>
    </h3>
  </div>
)

export default NotFoundPage
