package com.project.studentsystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.studentsystem.model.student;
import com.project.studentsystem.repository.studentrepo;
@RestController

@CrossOrigin
public class studentcontroller {
	
	@Autowired
	private studentrepo studentrepo;
	
	//create data
	@PostMapping("/create")
	public student createstudent(@RequestBody student student) {
		
		return studentrepo.insert(student);
	}
	
	//delete data with id
	@DeleteMapping("/delete/{id}")
    public String deletestudent(@PathVariable String id) {
		
		studentrepo.deleteById(id);
		
		return "deleted successfully";
		
	}
	
   //get all data
      @GetMapping("/list")
    public  List<student> liststudent() {
	     
    	return studentrepo.findAll();
	
       }
    
    //update data with id
    @PutMapping("/update/{id}")
    public student updateTutorial(@PathVariable("id") String id, @RequestBody student tutorial) {
    	Optional<student> tutorialData = studentrepo.findById(id);
    	  if (tutorialData.isPresent()) {
    		  student var = tutorialData.get();
    	    var.setName(tutorial.getName());
    	    var.setQual(tutorial.getQual());
    	    studentrepo.save(var);
    	   
    	    return tutorialData.get();
    	  } else {
    	    return null;
    	  }
    }
    
    //get data linked with a given id
    @GetMapping("/student/{id}")
    public ResponseEntity<student> getTutorialById(@PathVariable("id") String id) {
      Optional<student> variable = studentrepo.findById(id);
      if (variable.isPresent()) {
        return new ResponseEntity<>(variable.get(), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }
    
    
    
    
    
    
    
    
}
