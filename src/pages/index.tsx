import Head from 'next/head'
import {PollCreate} from "../components/PollCreate";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../theme";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import TagManager from 'react-gtm-module';
import React, { useEffect } from 'react';

export default function Home() {

  const tagManagerArgs = {
    id: 'GTM-5JNZP5T'
  }
  
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    
    // Update the document title using the browser API    
    TagManager.initialize(tagManagerArgs)
  });

  return (

    <div className="container">

      <Head>
        <title>PollCat.io</title>
        <link rel="icon" href="/favicon.ico" />
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

            section {
                background-color: rgb(255, 103, 104);
                color: rgb(23, 34, 59);
                line-height: 1.5;
                margin-top: 20px;
                padding: 20px;
            }

            section a {
              color: rgb(38, 56, 89);
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
            <PollCreate />
          </div>

          <section>
            <h2>What is PollCat.io?</h2>
            <p>From the folks that brought you straws for polls, PollCat.io is a whole new kind of animal. We’ve ditched the bloat of servers and relational tables for a sleek, serverless, agile solution that’s filled with enough buzz words to make any professional happy. </p>
            <p>But we’re not here for professionals. No, we’re here for the unbuttoned people of the world that have super important decisions to make. <a href="#">What should you have for dinner?</a> <a href="#">What’s the best movie ever made?</a> <a href="#">Which Super Smash Brothers game reigns supreme?</a> Find out the answers to those questions and more with PollCat.io.</p>
            <p>Like what you see? <a href="https://www.paypal.me/pollcatdotio" target="_blank">Buy us a beer</a> or just get back to asking the really important questions in life.</p> 
          </section>  

        </main>

        <Footer />

      </ThemeProvider>

    </div>

  )
}
