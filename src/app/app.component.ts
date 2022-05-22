import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-portfolio';

  constructor(public Location: Location, private router: Router) {
    if (this.Location.path() === '') {
      this.router.navigateByUrl('/Home');
    }
  }

  next() {
    let list = document.querySelectorAll('.navbar ul li');
    if (list[0].classList.contains('active')) {
      document.getElementById('About')?.click();
    } else if (list[1].classList.contains('active')) {
      document.getElementById('Project')?.click();
    } else if (list[2].classList.contains('active')) {
      document.getElementById('Work')?.click();
    } else if (list[3].classList.contains('active')) {
      document.getElementById('Contact')?.click();
    }
  }

  prev() {
    let list = document.querySelectorAll('.navbar ul li');
    if (list[1].classList.contains('active')) {
      document.getElementById('Home')?.click();
    } else if (list[2].classList.contains('active')) {
      document.getElementById('About')?.click();
    } else if (list[3].classList.contains('active')) {
      document.getElementById('Project')?.click();
    } else if (list[4].classList.contains('active')) {
      document.getElementById('Work')?.click();
    }
  }
}
