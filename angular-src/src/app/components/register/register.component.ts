import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  password: String;

  // Any time we use a service in a component, we need to inject it in a constructor of that component
  constructor(private validateService: ValidateService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	console.log('Register form submitted...');
  	// Create an object from the form fields
  	const user = {
  		name: this.name,
  		email: this.email,
  		password: this.password
  	}

  	// validate user using validateRegister function of the validateService service
  	if(!this.validateService.validateRegister(user)){
  		console.log('Validation failed - empty fields...');
  		// Display a flash message
  		this.flashMessages.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  	// validate email using validateEmail function of the validateService service
  	if(!this.validateService.validateEmail(user.email)){
  		console.log('Email validation failed...');
  		// Display a flash message
  		this.flashMessages.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  }

}
