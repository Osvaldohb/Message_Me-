package com.message.users.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.message.users.Dao.UserDao;
import com.message.users.Entity.User;

@Service
public class UserServiceIMPL implements IUserService{
	
	@Autowired
	private UserDao userDao;

	@Override
	public List<User> findAll() {
		return (List<User>) userDao.findAll();
	}

	@Override
	public User saveUser(User user) {
		return userDao.save(user);
	}

}
