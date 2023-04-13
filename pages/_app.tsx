import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'boxicons/css/boxicons.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
