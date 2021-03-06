package com.spring.thnoh.service;

import com.spring.thnoh.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class UserService {

    //thread가 id에 접근하는데 상호배제를 이루면서 id를 자동 증가 시키기 위해 AtomicLong을 이용.
    private static final AtomicLong counter = new AtomicLong();

    private static List<User> users;

    public UserService(){
        users = new ArrayList<User>();

        users.add(new User(counter.incrementAndGet(),"Sam",30,70000));
        users.add(new User(counter.incrementAndGet(),"Tom",40,50000));
        users.add(new User(counter.incrementAndGet(),"Jerome",45,30000));
        users.add(new User(counter.incrementAndGet(),"Silvia",50,40000));

    }

    public List<User> findAllUsers(){
        return users;
    }

    public User findById(long id){
        for(User user: users){
            if(user.getId() == id){
                return user;
            }
        }
        return null;
    }

    public User findByName(String name){
        for(User user : users){
            if(user.getName().equalsIgnoreCase(name)){
                return user;
            }
        }
        return null;
    }

    public void saveUser(User user){
        user.setId(counter.incrementAndGet());
        users.add(user);
    }

    public void updateUser(User user){
        int index = users.indexOf(user);
        users.set(index,user);
    }

    public void deleteUserById(long id){

        for(Iterator<User> iterator = users.iterator(); iterator.hasNext();){
            User user = iterator.next();
            if(user.getId()==id){
                iterator.remove();
            }
        }

    }

    public boolean isUserExist(User user){
        return findByName(user.getName()) != null;
    }

    public void deleteAllUsers(){
        users.clear();
    }


}
