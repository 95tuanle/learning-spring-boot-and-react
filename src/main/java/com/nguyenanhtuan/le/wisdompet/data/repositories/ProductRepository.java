package com.nguyenanhtuan.le.wisdompet.data.repositories;

import com.nguyenanhtuan.le.wisdompet.data.entities.ProductEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductEntity, Long> {
}
