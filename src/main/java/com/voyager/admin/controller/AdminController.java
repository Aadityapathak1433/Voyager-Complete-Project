package com.voyager.admin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voyager.admin.exception.ResourceNotFoundException;
import com.voyager.admin.model.Users;
import com.voyager.admin.repository.UsersRepository;

@RestController
@RequestMapping("api/v1")
public class AdminController {
	@Autowired
	private EmailService es;
	
	public static class LoginBody{
		private String emailId;
		public String getEmailId() {
			return emailId;
		}
		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		private String password;
		public LoginBody() {
		}
		public LoginBody(String email, String password) {
			this.emailId=email;
			this.password=password;
		}
	}
	@Autowired
	private UsersRepository adminrepo;
	
	//show employee
	@GetMapping("/admin")
	public List<Users>getAllusers(){
		return adminrepo.findAll();
	}
	
	//create Employee
	@PostMapping("/admin")
	public Users createUser( @RequestBody Users use) {
		Users user = new Users(use.getUserName(), use.getEmailId(), use.getPassword());
		adminrepo.save(user);
		es.sendEmail(user.getEmailId(),"Voyager Verification!","http://localhost:8008/api/v1/admin/verify/"+user.getId());
		user.setPassword("");
		return user;
	}
	
	@PostMapping("/admin/login")
	public ResponseEntity<Users> loginUser( @RequestBody LoginBody lb ) {
		Users user=adminrepo.findUserByEmailId(lb.getEmailId());
		if (user.getPassword().equals(lb.getPassword())){
			return ResponseEntity.ok(user);
		} else {
			return ResponseEntity.ok(new Users());
		}
		
	}
	
	
	//get user by id
	@GetMapping("/admin/{id}")
	public ResponseEntity<Users> getUserById(@PathVariable Long id) {
		Users user=adminrepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Use with id "+id+" not found"));
		return ResponseEntity.ok(user);
	}
	
	//update user restApi
	@PutMapping("/admin/{id}")
	public ResponseEntity<Users> updateEntity(@PathVariable Long id,@RequestBody Users userdetails ){
		Users user=adminrepo.findById(id).orElseThrow(()->new ResourceNotFoundException("User of id "+id+" does not exist"));
		user.setEmailId(userdetails.getEmailId());
		user.setUserName(userdetails.getUserName());
		user.setPassword(userdetails.getPassword());
		user.setVerify(userdetails.getVerify());
		Users  updateUser=adminrepo.save(user);
		return ResponseEntity.ok(updateUser); 
	}
	// delete employee rest api
	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Users user= adminrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User of id "+id+" does not exist"));
		
		adminrepo.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/admin/verify/{id}")
	public ResponseEntity<Map<String, String>> Verification(@PathVariable Long id) {
		Users user= adminrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User of id "+id+" does not exist"));
		
		if (user.getVerify()){
			Map<String, String> response = new HashMap<>();
			response.put("message", "user already verified");
			response.put("success", "false");
			return ResponseEntity.ok(response);
		} else {
			user.setVerify(true);
			adminrepo.save(user);
			Map<String, String> response = new HashMap<>();
			response.put("message", "user verified successfully");
			response.put("success", "true");
			return ResponseEntity.ok(response);
		}
	}
} 
