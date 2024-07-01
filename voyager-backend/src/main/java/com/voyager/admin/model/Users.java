package com.voyager.admin.model;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;	
	
	@Column(name = "user_name")
	private String userName; 
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "password")
	private String password;
	
	@Column(name="verify")
	private Boolean verify = false;

	public Users() {}
	
	public Users(String firstName, String emailId, String password) {
		super();
		this.userName = firstName;
		this.emailId = emailId;
		this.password = password;
		this.verify=false;

	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
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

	public Boolean getVerify() {
		return verify;
	}

	public void setVerify(Boolean verify) {
		this.verify = verify;
	}

}