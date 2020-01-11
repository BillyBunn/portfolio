import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Flex, Heading, Image, Text, Card } from '@theme-ui/components'
import { animated, useTrail, useSpring, useChain, config } from 'react-spring'
import useMeasure from './useMeasure'
import ProjectCard from '../components/ProjectCard'
import theme from '../gatsby-plugin-theme-ui'

const AnimatedBox = animated(Box)
const AnimatedCard = animated(Card)
const AnimatedHeading = animated(Heading)

const Boxes = ({ data }) => {
  // TODO: figure out if this logic can go inside `pages/index.mdx` somehow
  data = data.edges.reduce((acc, edge) => {
    acc.push({ ...edge.node.frontmatter, path: edge.node.fields.slug })
    return acc
  }, [])

  const titleRef = useRef()
  const titleSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.molasses, clamp: true },
    ref: titleRef
  })

  const boxRef = useRef()
  const [bind, { height, top }] = useMeasure()
  const spring = useSpring({
    from: { height: 0 },
    to: { height: height + 8 * 2 }, // height + top & bottom padding
    config: {
      ...config.slow,
      // tension: 280,
      // friction: 200,
      clamp: true
    },
    ref: boxRef
  })

  const trailRef = useRef()
  const trail = useTrail(data.length, {
    from: {
      opacity: 0,
      xys: [theme.space[2], 0, 1, -0.25, 0] // x, y, scale, rotate, skew
    },
    to: {
      opacity: 1,
      xys: [0, 0, 1, 0, 0]
    },
    config: { ...config.slow, clamp: true },
    ref: trailRef
  })

  useChain([boxRef, titleRef, trailRef], [0, 0.25, 0.3])

  return (
    <AnimatedBox bg="muted" p={2} style={spring}>
      <div {...bind}>
        <Box>
          <AnimatedHeading style={titleSpring} p={3}>
            Projects
          </AnimatedHeading>
        </Box>
        {trail.map(({ xys, stuff, ...animation }, idx) => {
          const { title, image, description, path } = data[idx]
          return (
            <AnimatedCard
              key={title}
              as={Link}
              to={path}
              mb={2}
              style={{
                ...animation,
                transform: xys.interpolate(
                  (x, y, s, rX, rY) =>
                    `translate3d(${x}px, ${y}, 0) scale(${s}) rotateX(${rX}turn) rotateY(${rY}turn)`
                )
              }}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              {/* <Image
              as={Img}
              fluid={image.childImageSharp.fluid}
              height="300px"
              objectFit="cover"
            /> */}
              <Heading fontWeight="body">{title}</Heading>
              <Text>{description}</Text>
            </AnimatedCard>
          )
        })}
      </div>
    </AnimatedBox>
  )
}

export default Boxes
