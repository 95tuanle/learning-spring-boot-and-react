import {useEffect, useState} from 'react'
import Loading from "./Loading.jsx";

const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch('/api/customers');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const customers = await response.json();
      setCustomers(customers);
    }
    getCustomers().catch(console.error)
  }, [])

  return customers.length === 0 ? <Loading/> : <><h3>Customers</h3>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email Address</th>
        <th>Phone Number</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
      {customers.map(customer => {
        const {
          customerId, firstName, lastName, emailAddress, phoneNumber, address
        } = customer;
        return (<tr key={customerId}>
          <td>{customerId}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{emailAddress}</td>
          <td>{phoneNumber}</td>
          <td>{address}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </>
}
export default Customers