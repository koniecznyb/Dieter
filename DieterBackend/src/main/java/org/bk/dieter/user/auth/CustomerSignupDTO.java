package org.bk.dieter.user.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Created by SG0224958 on 29.12.16.
 */
@Getter
public class CustomerSignupDTO {

    private String password;
    private String firstName;
    private String email;
}
