package com.message.users.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.message.users.Entity.User;
import com.message.users.Service.IUserService;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private IUserService service;
	@CrossOrigin(origins = "*")
	@GetMapping("list")
	public List<User> listar(){
		return service.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("add")
	public HttpStatus create(@RequestBody User user) {
		User savep=service.saveUser(user);
		return HttpStatus.CREATED;
	}

}
