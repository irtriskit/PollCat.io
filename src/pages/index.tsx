import Head from 'next/head'
import {PollCreate} from "../components/PollCreate";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../theme";

export default function Home() {

  return (

    <div className="container">

      <Head>
        <title>PollCat.io</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Easy live polling for the unbuttoned people of the world." />
      </Head>
      
      <ThemeProvider theme={baseTheme}>
        <main className="content">

          <style jsx global>{`
            body {
              background-color: #17223b;
            }
          `}</style>  

          <Header />

          <div className="poll-container">
            <PollCreate />
          </div>

          <About />

        </main>

        <Footer />
      </ThemeProvider>

    </div>

  )
}
