import SearchBar from '@/components/SearchBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <SearchBar />
    <Component {...pageProps} />
    </div>
}
