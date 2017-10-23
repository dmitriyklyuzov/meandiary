import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	// Properties
	authToken: any;
	user: any;


  constructor(private http: Http) { }

  // functions
  registerUser(user){
  	// set a header value
  	let headers = new Headers();
  	headers.append('Conent-Type', 'application/json');

  	// observable
  	// POST user object to the endpoint along with headers
  	return this.http.post('http://localhost:3000/users/register', user, {headers})
  	.map(res => res.json());
  }

}
