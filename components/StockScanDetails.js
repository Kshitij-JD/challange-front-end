import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/StockScanDetails.module.css'
import StockDetailsReadSection from './StockDetailsReadSection'

const StockScanDetails = (props) => {
  const [slugDetails , setSlugDetails] = useState(null)
  const router = useRouter();

  useEffect(()=>{
    if(!router.isReady) return;
    const { id } = router.query;
    setDetailsValue(id)
  }, [router.isReady]);

  const setDetailsValue = (slug) => {
    const stockScanData = JSON.parse(localStorage.getItem('StockScanData'))
    const details = stockScanData.find(o => o.name === slug);
    setSlugDetails(details)
  }
  return (
    <>
      {slugDetails && 
        <div className={styles["mainCard"]}>
          {/* Card Title */}
          <div className={styles["title"]}>
            <div>{slugDetails.name}</div>
            <div 
              className={`${styles[slugDetails.color]} ${styles.listItemTag}`}
            >
              {slugDetails.tag}
            </div>
          </div>
          {/* Card Body read section */}
          <div className={styles["body"]}>
            <StockDetailsReadSection criteria={slugDetails.criteria}></StockDetailsReadSection>
          </div>
        </div>
      }
    </>
  )
}

export default StockScanDetails;