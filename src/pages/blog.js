import React from 'react'
import Layout from '../components/layout'
import styles from "../components/blog.module.css"
console.log(styles)

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Sesame snaps ice cream fruitcake. Jelly bonbon soufflé chocolate cake.
          Chocolate cake pudding wafer cotton candy gingerbread marshmallow
          topping cake pastry.
        </p>
      </div>
    </Layout>
  )
}

export default blog
