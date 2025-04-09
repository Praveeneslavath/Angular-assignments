import { Component } from '@angular/core';
import { ChildcompComponent } from "../childcomp/childcomp.component";

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [ChildcompComponent],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

}
