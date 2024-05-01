package com.nguyenanhtuan.le.wisdompet.web.rest;

import com.nguyenanhtuan.le.wisdompet.services.ProductService;
import com.nguyenanhtuan.le.wisdompet.web.errors.BadRequestException;
import com.nguyenanhtuan.le.wisdompet.web.models.Product;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/products")
public class ProductRestController {
    private final ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return this.productService.getAllProducts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product addProduct(@RequestBody Product model) {
        return this.productService.createOrUpdateProduct(model);
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable("id") long id) {
        return this.productService.getProduct(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody Product model) {
        if (!Objects.equals(id, model.getProductId())) {
            throw new BadRequestException("incoming id doesn't match path");
        }
        return this.productService.createOrUpdateProduct(model);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    public void deleteProduct(@PathVariable("id") long id) {
        this.productService.deleteProduct(id);
    }
}
