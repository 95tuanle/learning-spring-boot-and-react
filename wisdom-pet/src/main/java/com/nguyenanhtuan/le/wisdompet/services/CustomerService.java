package com.nguyenanhtuanle.lil.wisdompet.services;

import com.nguyenanhtuanle.lil.wisdompet.data.entities.CustomerEntity;
import com.nguyenanhtuanle.lil.wisdompet.data.repositories.CustomerRepository;
import com.nguyenanhtuanle.lil.wisdompet.web.errors.NotFoundException;
import com.nguyenanhtuanle.lil.wisdompet.web.models.Customer;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers(String filterEmail) {
        List<Customer> customers = new ArrayList<>();
        if (StringUtils.hasLength(filterEmail)) {
            CustomerEntity customerEntity = customerRepository.findByEmail(filterEmail);
            if (customerEntity != null) {
                customers.add(translateDbToWeb(customerEntity));
            }
        } else {
            Iterable<CustomerEntity> customerEntities = customerRepository.findAll();
            for (CustomerEntity customerEntity : customerEntities) {
                customers.add(translateDbToWeb(customerEntity));
            }
        }
        return customers;
    }

    public Customer getCustomer(long customerId) {
        Optional<CustomerEntity> customerEntity = customerRepository.findById(customerId);
        if (customerEntity.isEmpty()) {
            throw new NotFoundException("Customer not found");
        }
        return translateDbToWeb(customerEntity.get());
    }

    public Customer createOrUpdate(Customer customer) {
        CustomerEntity customerEntity = translateWebToDb(customer);
        customerEntity = customerRepository.save(customerEntity);
        return translateDbToWeb(customerEntity);
    }

    public void deleteCustomer(long customerId) {
        customerRepository.deleteById(customerId);
    }

    private CustomerEntity translateWebToDb(Customer customer) {
        CustomerEntity customerEntity = new CustomerEntity();
        customerEntity.setFirstName(customer.getFirstName());
        customerEntity.setLastName(customer.getLastName());
        customerEntity.setEmail(customer.getEmail());
        customerEntity.setPhone(customer.getPhone());
        customerEntity.setAddress(customer.getAddress());
        return customerEntity;
    }

    private Customer translateDbToWeb(CustomerEntity customerEntity) {
        Customer customer = new Customer();
        customer.setFirstName(customerEntity.getFirstName());
        customer.setLastName(customerEntity.getLastName());
        customer.setEmail(customerEntity.getEmail());
        customer.setPhone(customerEntity.getPhone());
        customer.setAddress(customerEntity.getAddress());
        return customer;
    }
}
