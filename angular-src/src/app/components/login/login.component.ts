import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // add email and password as component properties
  email: String;
  password: String;

  // inject services and components
  constructor(
  	private authService: AuthService,
  	private router: Router,
  	private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
  	console.log('Login form submitted...');
  	
  	// create user object
  	const user = {
  		email: this.email,
  		password: this.password
  	}

  	// call auth service - subscribe to an observable
  	this.authService.authenticateUser(user).subscribe(data => {
  		// if successfully logged in
  		if(data.success){
  			this.authService.storeUserData(data.token, data.user);
  			this.flashMessages.show('You are now logged in', {
  				cssClass: "alert-success",
  				timeout: 3000
  			});
  			this.router.navigate(['dashboard']);
  		}
  		else{
  			// Display a flash message from server
  			this.flashMessages.show(data.msg, {
  				cssClass: "alert-danger",
  				timeout: 3000
  			});
  			// redirect to login
  			this.router.navigate(['login']);
  		}
  	});
  }

}
