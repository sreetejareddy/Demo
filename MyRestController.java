package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dao.Customer_Details_Dao;
import com.example.demo.model.Customer_Details;

@RestController
@RequestMapping("/bank")
public class MyRestController {
	@Autowired
    Customer_Details_Dao dao;
	@GetMapping(value="hi")
	public String sayHi() {
		return "Hello World!";
	}
	
	@GetMapping("/customers")
    public List<Customer_Details> getBook() {
   	 return dao.findAll();
    }
	
	@PutMapping("/update")
	public String updateBook(@RequestBody Customer_Details c) {
	  int id = c.getCust_id();
	   if(dao.existsById(id)) {
		   dao.save(c);
		   return "Successfully updated";
	   }	  
	   else
		   return "Cannot find record";
    }
	
	@PostMapping("/add")
	public String addBook(@RequestBody Customer_Details c) {
		int id=c.getCust_id();
		if(dao.existsById(id)) {
			   return "Record already exists";
		   }	  
		   else {
			   dao.save(c);
			   return "Sccessfully added";
		   }
			   
    }
	
	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable("id") Integer id) {
		if(dao.existsById(id)) {
			dao.deleteById(id);
			return "Successfully Deleted record";
		}
		else {
			return "Record not found";
		}
	}
}
