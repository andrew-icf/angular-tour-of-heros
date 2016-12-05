import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1 highlight>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  <hr>
  <app-title [subtitle]="subtitle"></app-title>
  <app-contact></app-contact>
`,
  styleUrls: ['app/app.component.css'],
})
// <app-title [subtitle='subtitle']></app-title>
export class AppComponent {
  title = 'Tour of Heroes';
  subtitle = '(v1)';
}
