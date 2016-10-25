import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { XLarge } from './x-large';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  public email = {
    general: {
      heading: "TestHeading",
      subheading: "TestSubHeading",
      color:"#fffff"
    }
  }

  constructor(public appState: AppState) {
    console.log(this.email);
  }

  ngOnInit() {

  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
