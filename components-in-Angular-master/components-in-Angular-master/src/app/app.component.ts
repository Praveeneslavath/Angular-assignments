import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  
import { Component1Component } from './component1/component1.component'; 
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,Component1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';
}
