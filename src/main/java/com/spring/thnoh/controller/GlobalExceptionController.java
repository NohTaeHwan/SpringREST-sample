package com.spring.thnoh.controller;

import com.spring.thnoh.exception.ErrorResponse;
import com.spring.thnoh.exception.UserDuplicatedException;
import com.spring.thnoh.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class GlobalExceptionController {

    /**
     * Not Found error handler
     *
     * @param req
     * @param ex
     * @return
     */
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(HttpServletRequest req, UserNotFoundException ex ){

        String requestURL = req.getRequestURL().toString();

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setRequestURL(requestURL);
        errorResponse.setErrorCode("user.notfound.exception");
        errorResponse.setErrorMsg("User with id " + ex.getId() + " not found");

        return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.NOT_FOUND);

    }

    /**
     * duplicated error handler
     *
     * @param req
     * @param ex
     * @return
     */
    @ExceptionHandler(UserDuplicatedException.class)
    public ResponseEntity<ErrorResponse> handleUserDuplicatedException(HttpServletRequest req, UserDuplicatedException ex ){

        String requestURL = req.getRequestURL().toString();

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setRequestURL(requestURL);
        errorResponse.setErrorCode("user.duplicated.exception");
        errorResponse.setErrorMsg("Unable to create. A user with name " + ex.getName() + " already exist");

        return new ResponseEntity<ErrorResponse>(errorResponse,HttpStatus.CONFLICT);

    }
}
