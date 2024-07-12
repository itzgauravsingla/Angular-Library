import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppConstants } from '../../constants/app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  routes = AppConstants.Routes;
  constructor(private router: Router) {}

  redirectTo(path: string): void {
    this.router.navigate([path])
  }
}
