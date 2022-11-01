import styles from '../styles/StockScanListing.module.css'
import { useEffect, useState } from 'react'
import { getStockScan } from '../services/StockScan.service'
import { useRouter } from "next/router";
import StockScanDetails from './StockScanDetails';

const StockScanListing = (props) => {
  const [stockScanData, setStockScanData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    getStockScan()
      .then(scanData => {
        if(mounted) {
          setStockScanData(scanData)
          localStorage.setItem("StockScanData",JSON.stringify(scanData))
        }
      })
    return () => mounted = false;
  }, [])

  const handleOnClickStockScanCriteria = (key) => {
    router.push(`/details/${key}`)
  }

  return (
    <>
      <ul className={styles.listGroup}>
        {stockScanData && 
          stockScanData.map((stockCriteria) => (
            <li 
              key={stockCriteria.name} 
              value={stockCriteria.name}
              className={styles.listItem}
              onClick={()=>handleOnClickStockScanCriteria(stockCriteria.name)}
            >
              <div>{stockCriteria.name}</div>
              <div 
                className={`${styles[stockCriteria.color]} ${styles.listItemTag}`}
              >
                {stockCriteria.tag}
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default StockScanListing;