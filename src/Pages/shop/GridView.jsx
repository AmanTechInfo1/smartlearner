import React from 'react'
import styles from './Shop.module.css'
import Products from './Products'
import ProductDetails from './ProductDetails'

// import { products } from '../../assets/data/Products'

export default function GridView({products}) {
    
  return (
    <div className={styles.gridViewWrapper}>
      <div className={styles.gridViewSection}>
        {
            products.map((curElem, id) => {
                return <Products key={id} curElem={curElem}/>
            })
        }
      
      </div>
   
    </div>
  )
}
