package com.message.users.Dao;

import org.springframework.data.repository.CrudRepository;

import com.message.users.Entity.User;

public interface UserDao extends CrudRepository<User, Long>{

}
