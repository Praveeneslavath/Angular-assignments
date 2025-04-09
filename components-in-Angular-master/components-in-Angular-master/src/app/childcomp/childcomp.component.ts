import { Component } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  standalone: true,
  imports: [],
  templateUrl: './childcomp.component.html',
  styleUrl: './childcomp.component.css'
})
export class ChildcompComponent {
  name = 'praveen';

}
