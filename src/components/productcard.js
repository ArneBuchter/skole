import React from 'react'
import { Link } from 'gatsby'
import styles from './productcard.module.css'

function ProductCard({ name, category, price, slug }) {
  return (
    <article className={styles.productcard}>
      <h1 className={styles.productcard__name}>
        <Link to={'/' + slug}> {name} </Link>
      </h1>
      <p className={styles.productcard__p}>
        DKK <span className={styles.productcard__price}>{price}</span>
      </p>
    </article>
  )
}
export default ProductCard
