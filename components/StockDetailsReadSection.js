import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import styles from '../styles/StockScanDetails.module.css'

const StockScanDetails = (props) => {

  const TextSection = (criteria) => {
    const data = criteria.criteria
    switch (data.type) {
      case "plain_text":
        return (
          <>
            <div>{data.text}</div>
          </>
        )
        break;
      case "variable":
          const stringSplits = data.text.split(/\$\d/)
          const variables = data.text.match(/\$\w*/g)
          return (
            <>
            
              {stringSplits.map((subString,i)=>(
                <>
                  {subString}
                  {i < variables.length&&
                    <span  className={styles.variable}>
                    
                      {data.variable[variables[i]].type === "value" && 
                      ("(" +data.variable[variables[i]].values[0]+")")
                      }
                      {data.variable[variables[i]].type === "indicator" && 
                      ("(" + data.variable[variables[i]].default_value+")")
                      }
                    </span>
                  }
                </>
              ))}
            </>
          )
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      {props.criteria && 
      props.criteria.map((criteria, i)=>(
      <>
        <div className={styles.criteria}>
          <TextSection criteria={criteria}></TextSection>
        </div>

        {i < props.criteria.length-1 &&
          <div className={styles.divider}>and</div>
        }
      </>
      ))
      }
    </>
  )
}

export default StockScanDetails;