import {useEffect, useState} from 'react';
import {getCurrency} from '../Utils';
import Loading from "./Loading.jsx";

const Products = () => {
  const [products, setProducts] = useState([])
  const [vendors, setVendors] = useState(new Map())

  const add = (key, value) => {
    setVendors(prev => new Map([...prev, [key, value]]))
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json()
      setProducts(products)
    }
    const getVendors = async () => {
      const response = await fetch('/api/vendors')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const vendors = await response.json()
      vendors.map(vendor => {
        const {
          vendorId
          // , name, contact, emailAddress, phoneNumber, address,
        } = vendor;
        add(vendorId, vendor)
      })
    }
    getProducts().catch(console.error);
    getVendors().catch(console.error)
  }, [])

  return products.length === 0 ? <Loading/> : <>
    <h3>Products</h3>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Vendor</th>
      </tr>
      </thead>
      <tbody>
      {products.map(product => {
        const {
          productId, name, price, vendorId
        } = product;
        const vendor = vendors.get(vendorId);
        return (<tr key={productId}>
          <td>{productId}</td>
          <td>{name}</td>
          <td>{getCurrency(price)}</td>
          <td>{vendor ? vendor.name : 'Vendor not found'}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </>
}

export default Products;
