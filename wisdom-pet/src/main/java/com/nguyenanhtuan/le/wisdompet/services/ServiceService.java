package com.nguyenanhtuanle.lil.wisdompet.services;

import com.nguyenanhtuanle.lil.wisdompet.data.repositories.ServiceRepository;
import org.springframework.stereotype.Service;

@Service
public class ServiceService {
    private final ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
}
