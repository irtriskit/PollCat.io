import Head from 'next/head'
import {PollVote} from "../../components/PollVote";
import {useRouter} from "next/router";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useStrawTheme } from '../../useStrawTheme';

export default function Vote() {
  const [theme, toggleTheme] = useStrawTheme();

  const router = useRouter();
  const { id } = router.query;

  // On first render id is null
  if (!id) return null;

  return (
      <div className="container">

          <Head>
              <title>Pollcat.io</title>
              <link rel="icon" href="/favicon.ico"/>
          </Head>

          <main className="content"> 

              <Header toggleTheme={toggleTheme} />

              <div className="poll-container">
                <PollVote pollId={id?.toString()}/>
              </div>  

          </main>

          <Footer />

      </div>
  )
}
