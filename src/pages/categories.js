import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

/* function CategoryList({ data }) {
  let categories = data.allContentfulCategory.nodes

  return (
    <Layout>
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <Link to="">{category.name}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
} */

/* export default CategoryList */

/* export const categoryListQuery = graphql`
  query categoryListQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCategory {
      nodes {
        name
        description {
          description
        }
      }
    }
  }
` */
