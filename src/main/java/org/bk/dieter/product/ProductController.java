package org.bk.dieter.product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Optional;

/**
 * Created by redi on 05.04.2016.
 */
@RestController
public class ProductController {

    public static final Logger LOG = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    public
    @ResponseBody
    Iterable<Product> product() {
        return productRepository.findAll();
    }

    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public
    @ResponseBody
    Product saveProduct(@RequestBody Product product) {
        LOG.info("saving product: " + product);
        return productRepository.save(product);
    }

    @RequestMapping(value = "/product/{name}", method = RequestMethod.GET)
    public
    @ResponseBody
    Product getProduct(@PathVariable("name") String name) {
        Optional<Product> product = productRepository.findByName(name);
        if (product.isPresent()) {
            return product.get();
        }
        return null;
    }

    @RequestMapping(value = "/product/{name}", method = RequestMethod.PUT)
    public
    @ResponseBody
    void putProduct(@PathVariable("name") String name, @RequestBody Product product) {
        productRepository.save(product);
    }
}
