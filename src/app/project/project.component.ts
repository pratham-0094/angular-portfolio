import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(750, style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate(750, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  media = true;
  mediasm = true;
  mediaxs = true;

  constructor() {
    this.onResize();
  }

  project = [
    {
      title: 'AccInfo',
      link: 'https://github.com/pratham-0094/AccInfo',
      image: 'assets/AccInfo.png',
    },
    {
      title: 'Address-Book',
      link: 'https://github.com/pratham-0094/Address-Book',
      image: 'assets/Address-Book.png',
    },
    {
      title: 'Firstmy',
      link: 'https://github.com/prakhar-5447/firstmy',
      image: 'assets/Firstmy.jpg',
    },
    {
      title: 'Juicy-N-Yummy',
      link: 'https://github.com/pratham-0094/Juicy-N-Yummy',
      image: 'assets/Juicy-N-Yummy.png',
    },
    {
      title: 'ToDo-APP',
      link: 'https://github.com/pratham-0094/angular-project',
      image: 'assets/ToDo-APP.png',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 850) {
      this.media = true;
    } else {
      this.media = false;
    }
    if (window.innerWidth > 500 && window.innerWidth < 850) {
      this.mediasm = true;
    } else {
      this.mediasm = false;
    }
    if (window.innerWidth < 500) {
      this.mediaxs = true;
    } else {
      this.mediaxs = false;
    }
  }

  ngOnInit(): void {}
}
