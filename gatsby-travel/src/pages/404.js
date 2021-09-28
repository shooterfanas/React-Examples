import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Link to="/" className="notfound">
        Go home
        <h1 className="lost">You are lost!</h1>
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
