import {useEffect, useState} from 'react';

const Vendors = () => {
  const [vendors, setVendors] = useState([])

  useEffect(() => {
    const getVendors = async () => {
      const response = await fetch('/api/vendors')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const vendors = await response.json()
      setVendors(vendors)
    }
    getVendors().catch(console.error)
  }, [])

  return (<>
    <h3>Vendors</h3>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Email Address</th>
        <th>Phone Number</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
      {vendors.map(vendor => {
        const {
          vendorId, name, contact, emailAddress, phoneNumber, address,
        } = vendor;
        return (<tr key={vendorId}>
          <td>{vendorId}</td>
          <td>{name}</td>
          <td>{contact}</td>
          <td>{emailAddress}</td>
          <td>{phoneNumber}</td>
          <td>{address}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </>)
}

export default Vendors;