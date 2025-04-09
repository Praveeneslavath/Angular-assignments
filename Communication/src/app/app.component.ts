import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pdata = 'hello';
  person3 = {
    name: 'Alice',
    age: 25,
    address: '789 Oak St'
  };
}
