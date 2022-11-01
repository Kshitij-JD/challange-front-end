import Head from 'next/head'
import StockScanListing from '../components/StockScanListing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stock Scan</title>
        <meta name="description" content="Stock Scan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StockScanListing></StockScanListing>
      </main>
    </div>
  )
}
