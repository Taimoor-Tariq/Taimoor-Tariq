import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{pageProps.title}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="taimoor, taimoor-tariq, taimoor tariq, full-stack developer" />
                <meta name="robots" content="index, follow" />
                <meta name="title" content="Taimoor Tariq" />
                <meta name="description" content="Full-Stack Developer looking for opportunities." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.taimoor.me/" />
                <meta property="og:title" content="Taimoor Tariq" />
                <meta property="og:description" content="Full-Stack Developer looking for opportunities." />
                <meta property="og:image" content="https://www.taimoor.me/images/avatar.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.taimoor.me/" />
                <meta property="twitter:title" content="Taimoor Tariq" />
                <meta property="twitter:description" content="Full-Stack Developer looking for opportunities." />
                <meta property="twitter:image" content="https://www.taimoor.me/images/avatar.jpg" />
            </Head>

            <>
                <Component {...pageProps} />
            </>
        </>
    );
}

export default MyApp;
