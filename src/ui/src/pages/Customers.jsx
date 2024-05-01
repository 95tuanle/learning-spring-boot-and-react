import {useLayoutEffect, useState} from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useLayoutEffect(() => {
    const getCustomers = async () => {
      const response = await fetch('/api/customers');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCustomers(data);
    }
    getCustomers().catch(console.error);
  })

  return (<>
    <h3>Customers</h3>
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
      {customers.map(customer => (<tr key={customer.customerId}>
        <td>{customer.customerId}</td>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.emailAddress}</td>
        <td>{customer.phoneNumber}</td>
        <td>{customer.address}</td>
      </tr>))}
      </tbody>
    </table>
  </>);
}

export default Customers;