import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SecondPage = ({ path }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

SecondPage.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SecondPage;
