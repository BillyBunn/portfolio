import React, { useRef, useState } from 'react';
import { Card } from '@theme-ui/components';
import { useSpring, animated } from 'react-spring';

const AnimatedCard = animated(Card);

const ProjectCard = ({ children, props, trailAnimation }) => {
  console.log(trailAnimation)
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  // The useSpring hook
  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // ...opacity,
      // Setup physics
      // config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });
  return (
    <AnimatedCard
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.05, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({
          // ...animatedProps,
          xys: xys,
        });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({
          // ...animatedProps,
          xys: [0, 0, 1],
        });
      }}
      style={{
        ...trailAnimation,
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translate3d(${x}px, ${y}, 0)`
        ),
      }}
      // {...props}
    >
      {children}
    </AnimatedCard>
  );
};

export default ProjectCard;
