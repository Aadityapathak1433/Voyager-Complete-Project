package com.voyager.admin.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voyager.admin.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
	Users findUserByEmailId(String emailId);
}