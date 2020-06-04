package com.spring.thnoh.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserDuplicatedException extends RuntimeException {

    private String name;


}
