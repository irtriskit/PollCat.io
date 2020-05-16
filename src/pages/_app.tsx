import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module';
import {ThemeProvider} from "styled-components";
import {baseTheme, strawTheme} from "../theme";

function MyApp({ Component, pageProps }: AppProps) {

    const tagManagerArgs = {
        gtmId: 'GTM-5JNZP5T'
    }

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    
        // Update the document title using the browser API    
        TagManager.initialize(tagManagerArgs)
    });

    const [theme, setTheme] = useState('baseTheme');

    const toggleTheme = () => {
        if (theme === 'baseTheme') {
            setTheme('strawTheme');
        } else {
            setTheme('baseTheme');
        }
    }

  return (
    <ThemeProvider theme={theme === 'baseTheme' ? baseTheme : strawTheme}>
        <Layout>
            <button onClick={toggleTheme}>Toggle</button>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp
