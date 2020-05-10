import Head from 'next/head'
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../theme";
import {PollVote} from "../../components/PollVote";
import {useRouter} from "next/router";
import { Header } from '../../components/Header';

export default function Vote() {
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

            <main>
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
                `}</style>

                <ThemeProvider theme={baseTheme}>
                  <Header />
                    <div className="poll-container">
                        <PollVote pollId={id?.toString()}/>
                    </div>
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

                <a href="https://www.paypal.me/pollcatdotio" target="_blank">Donate</a> | <a href="https://discord.gg/QH6tH4C" target="_blank">Support</a>
            </footer>
        </div>
    )
}
