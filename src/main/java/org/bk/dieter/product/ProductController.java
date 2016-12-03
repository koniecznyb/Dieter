package org.bk.dieter.product;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Created by redi on 05.04.2016.
 */
@RestController
@Secured("ROLE_USER")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ProductController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());
    @NonNull
    private final ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Product> getProducts(@RequestParam(required = false) String name) {
        if(StringUtils.isEmpty(name)){
            return productRepository.findAll();
        }
        return productRepository.findByNameIgnoreCase(name);
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public ProductDTO saveProduct(@RequestBody ProductDTO productDTO) {
        Product product = new Product();
        product.setCalories(productDTO.getCalories());
        product.setCarbohydrates(productDTO.getCarbohydrates());
        product.setFats(productDTO.getFats());
        product.setProteins(productDTO.getProteins());
        product.setName(productDTO.getName());

        LOG.info("saving product: " + product);

        productRepository.save(product);
        return productDTO;
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Product getProduct(@PathVariable("id") long id) {
        Optional<Product> product = productRepository.findByProductId(id);
        if (product.isPresent()) {
            return product.get();
        }
        return null;
    }

    @CrossOrigin
    @RequestMapping(value = "/product/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public void putProduct(@PathVariable("id") long id, @RequestBody Product product) {
        productRepository.save(product);
    }

    @CrossOrigin
    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteProduct(@PathVariable("id") long id) {
        productRepository.delete(id);
    }
}
