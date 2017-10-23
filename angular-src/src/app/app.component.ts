import { Component } from '@angular/core';

// Decorator for the component that allows to add metadata
@Component({
  // selector is an html tag to insert a component
  selector: 'app-root',
  // html file that's associated with a component
  templateUrl: './app.component.html',
  // stylesheet url for this particular component
  styleUrls: ['./app.component.css']
})
// main class
export class AppComponent {
  // setting 'title' to 'app works'
  title = 'app works!';
}
