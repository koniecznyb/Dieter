package org.bk.dieter.product;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

/**
 * Created by redi on 05.04.2016.
 */
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ProductController {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());
    @NonNull
    private final ProductRepository productRepository;

    @RequestMapping(value = "/products", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Iterable<Product>> getProducts(@RequestParam(required = false) String name) {
        if (StringUtils.isEmpty(name)) {
            return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
        }
        return new ResponseEntity<>(productRepository.findByNameIgnoreCase(name), HttpStatus.OK);
    }

    @Secured("ROLE_USER")
    @RequestMapping(value = "/products", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public ResponseEntity<ProductDTO> saveProduct(@RequestBody ProductDTO productDTO) {
        Product product = new Product();
        product.setCalories(productDTO.getCalories());
        product.setCarbohydrates(productDTO.getCarbohydrates());
        product.setFats(productDTO.getFats());
        product.setProteins(productDTO.getProteins());
        product.setName(productDTO.getName());

        LOG.info("saving product: " + product);

        Product savedProduct = productRepository.save(product);
        if (savedProduct != null) {
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Product> getProduct(@PathVariable("id") long id) {
        Optional<Product> product = productRepository.findByProductId(id);
        if (product.isPresent()) {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Secured("ROLE_USER")
    @RequestMapping(value = "/product/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public void putProduct(@PathVariable("id") long id, @RequestBody Product product, HttpSession session) {

        LOG.error("session [{}], sessioncurrentusser [{}]", session, session.getAttribute("currentUser"));

        productRepository.save(product);
    }

    @Secured("ROLE_USER")
    @RequestMapping(value = "/product/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteProduct(@PathVariable("id") long id) {
        productRepository.delete(id);
    }
}
