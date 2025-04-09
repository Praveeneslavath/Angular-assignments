import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() cdata = '';
  test:boolean=true;
  @Input() parr: {name:string; age:number; address:string} = {
    name:'',
    age: 0,
    address: ''
  }
n: any;
  



}
