package com.nguyenanhtuanle.lil.wisdompet.data.repositories;

import com.nguyenanhtuanle.lil.wisdompet.data.entities.ServiceEntity;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends CrudRepository<ServiceEntity, Long> {
    ServiceEntity findByName(String name);
}
