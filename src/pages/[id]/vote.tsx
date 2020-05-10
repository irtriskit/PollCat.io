import Head from 'next/head'
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../../theme";
import {PollVote} from "../../components/PollVote";
import {useRouter} from "next/router";

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
                `}</style>

                <ThemeProvider theme={baseTheme}>
                    <header>
                        <h1>PollCat.io</h1>
                        <div className="quote">
                            <img src="https://pbs.twimg.com/media/EIVIxZWW4AEKQDT.jpg" alt="Polla the Polecat"
                                 height="64px"/>
                            <span className="quote-text">This is how we poll. We poll like this.</span>
                        </div>
                    </header>
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
                <a href="#">Donate</a> | <a href="#">Support</a>
            </footer>
        </div>
    )
}
