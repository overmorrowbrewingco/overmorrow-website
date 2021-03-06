import React from 'react';
import { Helmet } from 'react-helmet';

import LayoutFooter from './Footer';
import LayoutHeader from './Header';

import './Layout.scss';

const Layout = ({ children, locale = 'english', meta }) => (
  <div className="Layout">
    <Helmet defer={false}>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="og:image:alt" content="Overmorrow Brewing Company" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.imageUrl} />
    </Helmet>

    <LayoutHeader locale={locale} />

    {children}

    <LayoutFooter locale={locale} />
  </div>
);

export default Layout;
