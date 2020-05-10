import Head from 'next/head'
import {PollCreate} from "../components/PollCreate";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../theme";
import { Quoter } from '../components/Quoter';

export default function Home() {
  return (

    <div className="container">

      <Head>
        <title>PollCat.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content">

        <style jsx>{`
          header {
            align-items: center;
            background-color: rgb(38, 56, 89);
            color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 20px;
          }

          header a {
            color: white;
            text-decoration: none;
          }

          .quote {
            align-items: center;
            display: flex;
          }

          .quote-text {
            color: rgb(23, 34, 59);
            position: relative;
            background: rgb(255, 103, 104);
            border-radius: .4em;
            padding: 10px;
            margin-left: 15px;
            line-height: 1.5;
          }
          
          .quote-text:after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-right-color: rgb(255, 103, 104);
            border-left: 0;
            margin-top: -8px;
            margin-left: -8px;
          }

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

        <ThemeProvider theme={baseTheme}>

          <header>

            <a href="/"><h1>PollCat.io</h1></a>

            <div className="quote">
              <img src="/polla.jpg" alt="Polla the Polecat" />
              <span className="quote-text"><Quoter /></span>
            </div>

          </header>

          <div className="poll-container">
            <PollCreate />
          </div>

          <section>
            <h2>What is PollCat.io?</h2>
            <p>From the folks that brought you straws for polls, PollCat.io is a whole new kind of animal. We’ve ditched the bloat of servers and relational tables for a sleek, serverless, agile solution that’s filled with enough buzz words to make any professional happy. </p>
            <p>But we’re not here for professionals. No, we’re here for the unbuttoned people of the world that have super important decisions to make. <a href="#">What should you have for dinner?</a> <a href="#">What’s the best movie ever made?</a> <a href="#">Which Super Smash Brothers game reigns supreme?</a> Find out the answers to those questions and more with PollCat.io.</p>
            <p>Like what you see? <a href="#">Buy us a beer</a> or just get back to asking the really important questions in life.</p> 
          </section>  

        </ThemeProvider>

      </main>

      <footer>

        <style jsx>{`
          footer {
            background-color: rgb(38, 56, 89);
            color: white;
            padding: 20px;
            text-align: center;
          }

          footer a {
            color: white;
          }
        `}</style>

        <a href="#">Donate</a> | <a href="#">Support</a>

      </footer>

    </div>

  )
}
