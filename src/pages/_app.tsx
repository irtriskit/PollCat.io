import React, { useEffect } from 'react';
import { Container } from 'next/app'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {

    const tagManagerArgs = {
        id: 'GTM-5JNZP5T'
    }

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    
        // Update the document title using the browser API    
        TagManager.initialize(tagManagerArgs)
    });

  return (
    <Container>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Container>
  )
}

export default MyApp
