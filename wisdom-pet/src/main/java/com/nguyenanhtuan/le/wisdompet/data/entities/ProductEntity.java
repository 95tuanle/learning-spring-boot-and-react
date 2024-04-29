package com.nguyenanhtuan.le.wisdompet.data.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "PRODUCTS")
@Data
@ToString
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PRODUCT_ID")
    private long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PRICE")
    private BigDecimal price;

    @Column(name = "VENDOR_ID")
    private long vendorId;

//    CREATE TABLE PRODUCTS (
//            PRODUCT_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
//            NAME VARCHAR UNIQUE,
//            PRICE NUMBER (12,2),
//    VENDOR_ID BIGINT NOT NULL,
//    FOREIGN KEY (VENDOR_ID) references VENDORS(VENDOR_ID)
//            )
}
