import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/StockScanDetails.module.css'
import StockDetailsReadSection from './StockDetailsReadSection'

const StockScanDetails = (props) => {
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
      {slugDetails && 
      <>
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
            {
              slugDetails.criteria && 
              <StockDetailsReadSection criteria={slugDetails.criteria}></StockDetailsReadSection>
            }
          </div>
        </div>
      </>
      }
    </>
  )
}

export default StockScanDetails;