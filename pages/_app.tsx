import { AppProps } from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Layout from '@components/Layout';

library.add(fab);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>NextJs Avo</title>
			</Head>

			<Layout>
				<Component {...pageProps} />
				<style global jsx>
					{`
						* {
							box-sizing: border-box;
							margin: 0;
							padding: 0;
						}

						body {
							background: #f5f5f5;
							font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
						}

						::selection {
							background-color: #6affeb;
							color: #5a5a5a;
						}
					`}
				</style>
			</Layout>
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
