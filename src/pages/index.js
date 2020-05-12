import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';
import Section from '../components/styles/Section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Section>
    <Section>
      {[
        ...['black', 'white'].reduce(
          (colors, color) => [
            ...colors,
            `var(--${color})`,
            ...[15, 30, 50, 70, 85].map(lev => `var(--${color}-fade-${lev})`),
          ],
          []
        ),
        ...[
          'gray',
          'blue',
          'green',
          'yellow',
          'orange',
          'red',
          'purple',
          'pink',
        ].reduce(
          (colors, color) => [
            ...colors,
            `var(--${color})`,
            ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
              val => `var(--${color}-${val}00)`
            ),
            ...[15, 30, 50, 70, 85].map(lev => `var(--${color}-fade-${lev})`),
          ],
          []
        ),
      ].map(c => (
        <div
          style={{
            backgroundColor: c,
            color: c === 'var(--black)' ? 'var(--white)' : 'var(--black)',
            padding: '12px',
          }}
        >
          {c}
        </div>
      ))}
    </Section>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
