package com.nguyenanhtuan.le.wisdompet.data.repositories;

import com.nguyenanhtuan.le.wisdompet.data.entities.CustomerEntity;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<CustomerEntity, Long> {
    CustomerEntity findByEmail(String email);
}
