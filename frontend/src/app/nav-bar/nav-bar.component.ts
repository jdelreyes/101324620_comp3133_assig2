import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  title: string = 'Employee Management App';
}
