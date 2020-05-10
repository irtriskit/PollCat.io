import Head from 'next/head'
import {PollCreate} from "../components/PollCreate";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../theme";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pollcat.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider theme={baseTheme}>
          <PollCreate />
        </ThemeProvider>
      </main>

      <footer>
          Footer
      </footer>
    </div>
  )
}
