import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module';
import {ThemeProvider} from "styled-components";
import {baseTheme, strawTheme} from "../theme";
import { useStrawTheme } from '../useStrawTheme';

function MyApp({ Component, pageProps }: AppProps) {

    const tagManagerArgs = {
        gtmId: 'GTM-5JNZP5T'
    }

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    
        // Update the document title using the browser API    
        TagManager.initialize(tagManagerArgs)
    });

    const [theme, toggleTheme, componentMounted] = useStrawTheme();

    const themeMode = theme === 'baseTheme' ? baseTheme : strawTheme;

  return (
    <ThemeProvider theme={themeMode}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp
