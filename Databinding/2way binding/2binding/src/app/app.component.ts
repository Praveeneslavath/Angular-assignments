import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profile = {
    peru : "Praveen",
    email : "p@gmail.com"

  }
  // selectedCity = '';
  person = {
    name: 'John',    // Initial name
    surname: 'Doe'   // Initial surname
  };
  
}
