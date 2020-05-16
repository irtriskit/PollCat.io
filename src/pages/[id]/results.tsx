import Head from 'next/head'
import {useRouter} from "next/router";
import {PollResults} from "../../components/PollResults";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../theme";

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

            <ThemeProvider theme={baseTheme}>
              <main className="content">  
                  
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
