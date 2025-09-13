import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {

  constructor(protected readonly router: Router) { }

  backClicked() {
    console.log(this.router.url);

    const routeElements = this.router.url.split('/');
    routeElements.pop();

    this.router.navigate(routeElements);
  }
}
