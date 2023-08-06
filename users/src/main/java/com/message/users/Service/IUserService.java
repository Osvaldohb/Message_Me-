package com.message.users.Service;

import java.util.List;

import com.message.users.Entity.User;

public interface IUserService {
	public List<User> findAll();
	
	public User saveUser(User user);
}
