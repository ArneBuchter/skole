import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ProductCard from '../components/productcard'

class ProductIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const Products = get(this, 'props.data.allContentfulProduct.nodes')

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Products</h1>
        {Products.map((product, i) => {
          return <ProductCard {...product} key={product.slug} />
        })}
      </Layout>
    )
  }
}

export default ProductIndex

export const productQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      nodes {
        category
        description
        image {
          fluid {
            src
          }
        }
        name
        price
        sku
        slug
        stock
      }
    }
  }
`
