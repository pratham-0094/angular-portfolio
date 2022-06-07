import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

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

  uid: String = 'HVXJ4oyToWhktgb4M0GKhHxIdUy1';
  projects: any = [];

  constructor(private http: HttpClient) {
    this.onResize();
    this.http
      .get<any>(
        `https://firestore.googleapis.com/v1/projects/ino-app-20b90/databases/(default)/documents/Users/${this.uid}`
      )
      .subscribe((response) => {
        const projectUri = response.fields.project.arrayValue.values;

        console.log(response);
        console.log(response.fields.project.arrayValue.values);

        projectUri.forEach((element: any) => {
          const item = element.mapValue.fields;

          // console.log(element.mapValue.fields);
          // console.log(item.imageUri.stringValue);
          // console.log(item.title.stringValue);
          // console.log(item.desc.stringValue);
          // console.log(item.link.stringValue);

          let project = {
            image: item.imageUri.stringValue,
            title: item.title.stringValue,
            desc: item.desc.stringValue,
            link: item.link.stringValue,
          };

          // console.log(project);

          this.projects.push(project);
        });
      });
  }

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
