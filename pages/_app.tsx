import "../styles/tailwind.css"
import { AppProps } from "next/app"
import i18n from "libs/i18n";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
