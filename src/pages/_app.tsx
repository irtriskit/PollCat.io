import React, { useEffect } from 'react';
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import TagManager from 'react-gtm-module';
import {ThemeProvider} from "styled-components";
import {baseTheme, strawTheme} from "../theme";
import { useStrawTheme } from '../useStrawTheme';

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() =>  {
        const tagManagerArgs = {
          gtmId: 'GTM-5JNZP5T'
        }
        TagManager.initialize(tagManagerArgs)
    }, [])

    const [theme, toggleTheme, componentMounted] = useStrawTheme();

    const themeMode = theme === 'baseTheme' ? baseTheme : strawTheme;

    if (!componentMounted) {
        return <div />
    };

    return (
        <ThemeProvider theme={themeMode}>
            <Layout>
                <Component {...pageProps} toggleTheme={toggleTheme} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
