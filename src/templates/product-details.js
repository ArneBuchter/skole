import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styles from './product-details.module.css'

class productDetails extends React.Component {
  render() {
    const product = get(this, 'props.data.contentfulProduct')

    return (
      <Layout>
        <h1> {product.name} </h1>
        {product.image.map((img) => {
          return <Img fluid={img.fluid} className={styles.productImage} />
        })}
        {product.description}
      </Layout>
    )
  }
}

export default productDetails

export const productQuerySingle = graphql`
  query productQuerySingle($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      category
      description
      image {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      name
      price
      sku
      stock
    }
  }
`
