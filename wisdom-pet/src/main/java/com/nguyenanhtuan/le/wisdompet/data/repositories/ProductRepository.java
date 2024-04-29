package com.nguyenanhtuanle.lil.wisdompet.data.repositories;

import com.nguyenanhtuanle.lil.wisdompet.data.entities.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductEntity, Long> {
    ProductEntity findByName(String name);
}
