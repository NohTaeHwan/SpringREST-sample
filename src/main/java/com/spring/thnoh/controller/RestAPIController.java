package com.spring.thnoh.controller;


import com.spring.thnoh.exception.UserDuplicatedException;
import com.spring.thnoh.exception.UserNotFoundException;
import com.spring.thnoh.model.User;
import com.spring.thnoh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;


import java.util.List;

@RestController //@Controller + @ResponseBody
@RequestMapping("/api")
public class RestAPIController {

    @Autowired
    private UserService userService;

    /**
     ****** Read All Users
     *
     * @return
     */
    //Read all users
    @RequestMapping(value = "/users",method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllUsers(){//ResponseEntity => header, body(json) ,status를 같이 전송
        List<User> users = userService.findAllUsers();
        if(users.isEmpty()){

            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }

    /**
     ****** Read user
     *
     * @param id
     * @return
     */
    @RequestMapping(value = "/users/{id}",method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@PathVariable("id") long id){

        User user = userService.findById(id);
        if(user==null){

            throw new UserNotFoundException(id);
        }

        return new ResponseEntity<User>(user,HttpStatus.OK);
    }

    /**
     ****** Create User
     * @param user : @RequestBody로 넘어온 폼에 들어있는 user 정보의 json이 User user에 매핑됨.
     * @param ucBuilder : 새로 만들어진 사용자의 uri를 헤더에 넣어주기 위한 param
     * @return Body부분에 아무것도 넣지않고 헤더에만 넣어서 전달하기 때문에 <Void>로 함.
     */
    @RequestMapping(value = "/users",method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody User user,
                                           UriComponentsBuilder ucBuilder){

        if(userService.isUserExist(user)){
            throw new UserDuplicatedException(user.getName());
        }

        userService.saveUser(user);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/users/{id}").buildAndExpand(user.getId()).toUri());

        return new ResponseEntity<Void>(headers,HttpStatus.CREATED);
    }

    /**
     ****** Update user
     * @param id
     * @param user
     * @return
     */
    @RequestMapping(value="/users/{id}", method= RequestMethod.PUT)
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user){

        User currentUser = userService.findById(id);

        if(currentUser == null){
            throw new UserNotFoundException(id);
        }

        currentUser.setName(user.getName());
        currentUser.setAge(user.getAge());
        currentUser.setSalary(user.getSalary());

        userService.updateUser(currentUser);

        return new ResponseEntity<User>(currentUser, HttpStatus.OK);
    }

    /**
     ****** Delete User
     * @param id
     * @return
     */
    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") long id){

        User user = userService.findById(id);

        if(user == null){
            throw new UserNotFoundException(id);
        }

        userService.deleteUserById(id);

        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

    /**
     ****** Delete All Users
     * @return
     */
    @RequestMapping(value = "/users", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteAllUsers(){

        userService.deleteAllUsers();
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }





}


