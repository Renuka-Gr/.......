import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import mycontext from '../../context/Data/mycontext';

function Order() {

    const context= useContext(mycontext)
    const {name,rollno} = context;
  return (
    <Layout>Order
        <h1> {name}</h1>
        <h1> {rollno}</h1>
    </Layout>
  )
}

export default Order;