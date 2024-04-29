package com.nguyenanhtuanle.lil.wisdompet.data.repositories;

import com.nguyenanhtuanle.lil.wisdompet.data.entities.VendorEntity;
import org.springframework.data.repository.CrudRepository;

public interface VendorRepository extends CrudRepository<VendorEntity, Long> {
    VendorEntity findByName(String name);
}
