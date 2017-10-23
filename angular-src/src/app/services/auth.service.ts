import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	// Properties
	authToken: any;
	user: any;

  constructor(private http: Http) { }

  /* functions */

  // register user
  registerUser(user){
  	// set a header value
  	let headers = new Headers();
  	headers.append('Conent-Type', 'application/json');

  	// create an observable - POST user object to the endpoint along with headers
  	return this.http.post('http://localhost:3000/users/register', user, {headers})
  	  .map(res => res.json());
  }

  // authenticate user
  authenticateUser(user){
    // set a header value
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // create an observable - make a POST request to the /authenticate endpoint with headers
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers})
      .map(res => res.json()); /* returns a token and user info if success:true, else returns success:false */
  }

  // get profile path
  getUserProfile(){
    // set a header value
    let headers = new Headers();
    // load token from local storage
    this.loadToken();
    // set content type header
    headers.append('Content-Type', 'application/json');
    // set authorization header
    headers.append('Authorization', this.authToken);

    // create an observable - make a GET request to the /profile endpoint with headers
    return this.http.get('http://localhost:3000/users/profile', {headers})
      .map(res => res.json()); /* returns a token and user info if success:true, else returns success:false */
  }

  // fetch token from local storage
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // store user data
  storeUserData(token, user){
    // store token in local storage (angular-jwt looks for the id_token path by default)
    localStorage.setItem('id_token', token);
    // store user in local storage (local storage can only store strings, so we're converting a JSON user to a String)
    localStorage.setItem('user', JSON.stringify(user));
    // set local properties
    this.authToken = token;
    this.user = user;
  }

  // logout
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }

  // check to see if we are logged in (actually to see if the token is not expired)
  loggedIn(){
    return tokenNotExpired('id_token');
  }
}
