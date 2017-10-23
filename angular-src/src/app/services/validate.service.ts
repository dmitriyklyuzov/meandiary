import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // validate registration form
  validateRegister(user){
  	if(user.name == undefined || user.email == undefined || user.password == undefined){
  		return false;
  	}
  	else{
  		return true;
  	}
  }

  // validate email
  validateEmail(email){
  	// regex
  	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	// returns 'true' if email, false otherwise
    return regex.test(email);
  }

}
