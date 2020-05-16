import Head from 'next/head'
import {PollCreate} from "../components/PollCreate";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { useStrawTheme } from '../useStrawTheme';

export default function Home() {

  const [theme, toggleTheme] = useStrawTheme();

  return (

    <div className="container">

      <Head>
        <title>PollCat.io</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Easy live polling for the unbuttoned people of the world." />
      </Head>
      
      <main className="content">

        <Header toggleTheme={toggleTheme}/>

        <div className="poll-container">
          <PollCreate />
        </div>

        <About />

      </main>

      <Footer />

    </div>

  )
}
