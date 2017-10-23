import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private authService: AuthService,
  	private router: Router,
  	private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
  	// call the logout() function of the AuthService
  	this.authService.logout();
  	// Display a flash message
  	this.flashMessages.show('You are now logged out', {
  		cssClass: 'alert-success',
  		timeout: 3000
  	});
  	// Redirect to the login page
  	this.router.navigate(['login']);
  	return false; 
  }

}
