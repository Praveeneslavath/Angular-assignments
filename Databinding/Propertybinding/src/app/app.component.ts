import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  message = '';
  data = "";
  data1 = '';
  data2 = '';
  test(){
    this.message = "Hello world";
  }
  remove(){
    return this.data = 'welcome to angular';
  }
  go(){
    return this.data1 = "job done";
  }
  pressing(){
    this.data2 = "you preesed key in the keyboard";
  }

}
