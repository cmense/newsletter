import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Newsletter Generator';
  url = 'https://github.com/delsner/newsletter';

  constructor() {
  }

  ngOnInit() {
  }
}
