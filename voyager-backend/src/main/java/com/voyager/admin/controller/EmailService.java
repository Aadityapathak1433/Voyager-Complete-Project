package com.voyager.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
    private JavaMailSender mailSender;
	
	public EmailService(JavaMailSender emailSender){
		  this.mailSender = emailSender;
	}
    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText("Welcome to voyager! Click on the link below to verify your mail :)"+ "\n"+body);
        mailSender.send(message);
    }
    
}
