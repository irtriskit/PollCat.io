import Head from 'next/head'
import {useRouter} from "next/router";
import {PollResults} from "../../components/PollResults";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function Vote({ toggleTheme }) {

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
                    <PollResults pollId={id?.toString()}/>
                </div>
                
            </main>

            <Footer />

        </div>
    )
}
