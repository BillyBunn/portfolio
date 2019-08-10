import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import { accent, primary, primaryLight } from '../../../constants/theme';
import posed from 'react-pose';

const linkPoses = {
  init: {
    y: 0,
  },
  hover: {
    y: -3,
  },
};

const PosedLi = posed.li({
  hoverable: true,
  init: {
    backgroundColor: primary,
  },
  hover: {
    backgroundColor: primaryLight,
  },
});

const PosedGatsbyLink = posed(Link)(linkPoses);
const PosedLink = posed.a(linkPoses);

const Nav = () => (
  <Container>
    <ul>
      <PosedLi>
        <PosedGatsbyLink
          to="/about"
          activeStyle={{ color: accent }}
          partiallyActive={true}
        >
          About
        </PosedGatsbyLink>
      </PosedLi>
      <PosedLi>
        <PosedGatsbyLink
          to="/projects"
          activeStyle={{ color: accent }}
          partiallyActive={true}
        >
          Projects
        </PosedGatsbyLink>
      </PosedLi>
      <PosedLi>
        <PosedGatsbyLink
          to="/contact"
          activeStyle={{ color: accent }}
          partiallyActive={true}
        >
          Contact
        </PosedGatsbyLink>
      </PosedLi>
      <PosedLi>
        <PosedLink href="https://github.com/billybunn">GitHub</PosedLink>
      </PosedLi>
    </ul>
  </Container>
);

export default Nav;
