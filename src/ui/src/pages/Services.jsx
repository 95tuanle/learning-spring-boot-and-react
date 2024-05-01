import {useEffect, useState} from 'react';
import {getCurrency} from '../Utils';
import Loading from "./Loading.jsx";

export const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const response = await fetch('/api/services')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const services = await response.json()
      setServices(services)
    }
    getServices().catch(console.error)
  }, [])

  return services.length === 0 ? <Loading/> : <>
    <h3>Services</h3>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {services.map(service => {
        const {
          serviceId, name, price
        } = service;
        return (<tr key={serviceId}>
          <td>{serviceId}</td>
          <td>{name}</td>
          <td>{getCurrency(price)}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </>
}

export default Services;
