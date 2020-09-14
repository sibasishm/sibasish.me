// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line node/no-extraneous-import
import { MDXProvider } from '@mdx-js/react';

import Layout from './Layout';
import Title from './Title';

const BlogPost = ({ meta, children }) => {
  return (
    <>
      <Layout>
        <article>
          <header>
            <Title>{meta.title}</Title>
          </header>
          <div className="prose">
            <MDXProvider>{children}</MDXProvider>
          </div>
          <footer>Links to previous and next article</footer>
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
