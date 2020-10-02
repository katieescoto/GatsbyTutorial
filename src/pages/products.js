import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
console.log(styles)

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>This is our products page</h1>
          <p className={styles.text}>
            Sesame snaps ice cream fruitcake. Jelly bonbon soufflé chocolate
            cake. Chocolate cake pudding wafer cotton candy gingerbread
            marshmallow topping cake pastry.
          </p>
        </div>
      </Layout>
    )
  }
}
