import Head from 'next/head'
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../theme";
import {useRouter} from "next/router";
import {PollResults} from "../../components/PollResults";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import TagManager from 'react-gtm-module';
import React, { useEffect } from 'react';

export default function Vote() {
    const router = useRouter();
    const { id } = router.query;
    const tagManagerArgs = {
      id: 'GTM-5JNZP5T'
    }

    // On first render id is null
    if (!id) return null;

    useEffect(() => {     
      TagManager.initialize(tagManagerArgs)
    });

    return (
        <div className="container">

            <Head>
                <title>Pollcat.io</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Easy live polling for unbuttoned people of the world." />
            </Head>

            <ThemeProvider theme={baseTheme}>

              <main className="content">

                <style jsx>{`
                  .poll-container {
                    margin: 0 auto;
                    max-width: 500px;
                    padding: 0 20px;
                  }

                `}</style>

                <style jsx global>{`
                  body {
                    background-color: rgb(23, 34, 59);
                    font-family: sans-serif;
                    margin: 0;
                  }

                  .container {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    height: 100vh; /* Avoid the IE 10-11 'min-height' bug. */
                  }
                      
                  .content {
                      flex: 1 0 auto; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
                  }
                  
                  footer {
                      flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
                  }
                  
                  * {
                      box-sizing: border-box;
                  }
                `}</style>    
                  
                <Header />

                <div className="poll-container">
                    <PollResults pollId={id?.toString()}/>
                </div>
                  
              </main>

              <Footer />

            </ThemeProvider>

        </div>
    )
}
