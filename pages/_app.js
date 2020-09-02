// progressbar
import NextNprogress from 'nextjs-progressbar';

// import styles
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                // color="#29D"
                // startPosition="1"
                // stopDelayMs="100"
                // height="3"
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp