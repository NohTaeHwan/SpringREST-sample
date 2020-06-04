package com.spring.thnoh.exception;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ErrorResponse {

    private String errorCode;
    private String errorMsg;
    private String requestURL;


}
