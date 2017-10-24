webpackJsonp([1,4],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // validate registration form
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // validate email
    ValidateService.prototype.validateEmail = function (email) {
        // regex
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // returns 'true' if email, false otherwise
        return regex.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Decorator for the component that allows to add metadata
var AppComponent = (function () {
    function AppComponent() {
        // setting 'title' to 'app works'
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector is an html tag to insert a component
            selector: 'app-root',
            // html file that's associated with a component
            template: __webpack_require__(686),
            // stylesheet url for this particular component
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
// Meeting place for all components
// When we create a service or component we have to import it here
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// Routes like routes/web.php
// Every path maps to a Component
var appRoutes = [
    // Home page
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            // Adding main app component into declarations
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(687),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(688),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    // inject services and components
    function LoginComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log('Login form submitted...');
        // create user object
        var user = {
            email: this.email,
            password: this.password
        };
        // call auth service - subscribe to an observable
        this.authService.authenticateUser(user).subscribe(function (data) {
            // if successfully logged in
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessages.show('You are now logged in', {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                // Display a flash message from server
                _this.flashMessages.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                // redirect to login
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(689),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
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
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(690),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // do stuff on initialization
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load user
        this.authService.getUserProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(691),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    // Any time we use a service in a component, we need to inject it in a constructor of that component
    function RegisterComponent(validateService, flashMessages, authService, router) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log('Register form submitted...');
        // Create an object from the form fields
        var user = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        // validate user using validateRegister function of the validateService service
        if (!this.validateService.validateRegister(user)) {
            console.log('Validation failed - empty fields...');
            // Display a flash message
            this.flashMessages.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // validate email using validateEmail function of the validateService service
        if (!this.validateService.validateEmail(user.email)) {
            console.log('Email validation failed...');
            // Display a flash message
            this.flashMessages.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register user if passed validation
        // use registerUser function of the AuthService service, subscribe to an observable
        this.authService.registerUser(user).subscribe(function (data) {
            // if backend returns a success:true message
            if (data.success) {
                // display a flash message
                _this.flashMessages.show('User successfully registered', { cssClass: 'alert-success', timeout: 3000 });
                // redirect to login page
                _this.router.navigate(['/login']);
            }
            else {
                // display a flash message
                _this.flashMessages.show('Something went wrong. Try again', { cssClass: 'alert-danger', timeout: 3000 });
                // redirect back to register
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(692),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            // redirect to login
            this.router.navigate(['login']);
            return false;
        }
    };
    ;
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/environment.js.map

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron -->\n<div class=\"jumbotron text-center\">\n\t<h1>MEAN Auth App</h1>\n\t<p class=\"lead\">Welcome to my custom MEAN authentication application built from scratch</p>\n\t<div>\n\t\t<!-- Register -->\n\t\t<a [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</a>\n\t\t<!-- Login -->\n\t\t<a [routerLink]=\"['/login']\" class=\"btn btn-default\">Login</a>\n\t</div>\n</div>\n\n<!-- Three rows -->\n<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<h3>Express Backend</h3>\n\t\t<p>A rock-solid Node.js/Express server using Mongoose to organize models and query the database.</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>Angular-CLI</h3>\n\t\t<p>Angular-CLI to generate components, services, and more. Local dev server and easy compulation.</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>JWT Tokens</h3>\n\t\t<p>Full-featured authentication using JSON web tokens. Login and store user data.</p>\n\t</div>\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n\n</div>\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" style=\"border-radius: 0px\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">MEAN</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <!-- Navbar-right -->\n      <ul class=\"nav navbar-nav navbar-right\">\n              <!-- LOGGED IN -->\n      \t<!-- Profile -->\n        <li \n          *ngIf=\"authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions] = \"{exact: true}\">\n          <a [routerLink]=\"['profile']\">Profile</a>\n        </li>\n        <!-- Dashboard -->\n        <li\n          *ngIf=\"authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions] = \"{exact: true}\">\n          <a [routerLink]=\"['dashboard']\">Dashboard</a>\n        </li>\n        <!-- Logout -->\n        <li *ngIf=\"authService.loggedIn()\">\n          <a href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n\n              <!-- NOT LOGGED IN -->\n        <!-- Login -->\n        <li\n          *ngIf=\"!authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions] = \"{exact: true}\">\n        \t<a [routerLink]=\"['login']\">Login</a>\n        </li>\n        <!-- Register -->\n        <li\n          *ngIf=\"!authService.loggedIn()\"\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions] = \"{exact: true}\">\n        \t<a [routerLink]=\"['register']\">Register</a>\n        </li>\n      </ul>\n\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<!-- Make sure there is a user before loading this view -->\n<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">{{user.email}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n</div>\n</div>"

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    /* functions */
    // register user
    AuthService.prototype.registerUser = function (user) {
        // set a header value
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Conent-Type', 'application/json');
        // create an observable - POST user object to the endpoint along with headers
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticate user
    AuthService.prototype.authenticateUser = function (user) {
        // set a header value
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // create an observable - make a POST request to the /authenticate endpoint with headers
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); }); /* returns a token and user info if success:true, else returns success:false */
    };
    // get profile path
    AuthService.prototype.getUserProfile = function () {
        // set a header value
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // load token from local storage
        this.loadToken();
        // set content type header
        headers.append('Content-Type', 'application/json');
        // set authorization header
        headers.append('Authorization', this.authToken);
        // create an observable - make a GET request to the /profile endpoint with headers
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); }); /* returns a token and user info if success:true, else returns success:false */
    };
    // fetch token from local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // store user data
    AuthService.prototype.storeUserData = function (token, user) {
        // store token in local storage (angular-jwt looks for the id_token path by default)
        localStorage.setItem('id_token', token);
        // store user in local storage (local storage can only store strings, so we're converting a JSON user to a String)
        localStorage.setItem('user', JSON.stringify(user));
        // set local properties
        this.authToken = token;
        this.user = user;
    };
    // logout
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // check to see if we are logged in (actually to see if the token is not expired)
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/Dmitriy/Dev/MEAN/meanauthapp/angular-src/src/auth.service.js.map

/***/ })

},[731]);
//# sourceMappingURL=main.bundle.map