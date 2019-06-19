import React from "react"
import Img from "gatsby-image"
import { BannerImage } from "./image.css"

export default ({ data, alt }) => {
  return (
    <BannerImage>
      <Img fluid={data} />
    </BannerImage>
  )
}
