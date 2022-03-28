import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Maintenance from './maintenance';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )

  // if (process.env.NEXT_PUBLIC_MAINTENANCE === "maintenance") {
  //   return <Maintenance />;
  // } else {
  //   return <Component {...pageProps} />;
  // }
}

export default MyApp
