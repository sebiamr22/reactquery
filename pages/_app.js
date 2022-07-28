import React from 'react';
import Head from 'next/head';
import * as config from '../site.config';
import '../css/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const Root = (props) => {
  const { Component, pageProps } = props;
  const { title, stylesheets } = config;
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>{title}</title>

          {stylesheets.map((href) => (
            <link key={href} rel="stylesheet" href={href} />

          ))}
          {/* <script src="https://cdn.tailwindcss.com"></script> */}
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default Root;
