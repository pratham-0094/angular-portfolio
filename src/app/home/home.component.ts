import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  media = true;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 700) {
      this.media = true;
    } else {
      this.media = false;
    }
  }

  ngOnInit(): void {}
}
