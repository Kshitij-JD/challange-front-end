import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Head from 'next/head'
import StockScanDetails from '../../components/StockScanDetails';

const StockScanListing = (props) => {
  const [slug, setSlug] = useState(null)
  const [slugDetails , setSlugDetails] = useState({})
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    setSlug(id)
  })

  useEffect(() => {
    let mounted = true;
    if(mounted) {
      setDetailsValue(slug)
    }
    return () => mounted = false;
  }, [slug])

  const setDetailsValue = (slug) => {
    const stockScanData = JSON.parse(localStorage.getItem('StockScanData'))
    const details = stockScanData.find(o => o.name === slug);
    setSlugDetails(details)
  }

  return (
    <>
      <div >
        <Head>
          <title>Stock Scan</title>
          <meta name="description" content="Stock Scan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

   
          <StockScanDetails></StockScanDetails>
      </div>
    </>
  )
}

export default StockScanListing;