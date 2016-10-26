import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { XLarge } from './x-large';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public email = {
    meta:{
      heading: "Free Newsletter November 2016"
    },
    general: {
      heading: "Newsletter",
      subheading: "November 2016",
      logo: "https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-62-128.png"
    },
    colors: {
      primary:"#12569E",
      secondary: "#ffffff",
      third: "#ffffff",
      fourth: "#6DBBEF",
      fifth: "#f7ffff",
      sixth: "#ADACB2",
      seventh: "#44525f",
      eighth: "#2f3942",
      ninth: "#153643"
    },
    introduction: {
      heading:"News in November",
      text:"These are the news in November 2016, stay tuned."
    },
    sections: [
      {
        heading:"First story",
        text: "This is the text for the story in the first section, feel free to change it to whatever you want to say. You can also add new sections through the controls on the left.",
        img: "https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-62-128.png",
        button: "Continue reading...",
        link: "https://delsner.github.io/newsletter"
      }
    ], 
    bottom: {
      text:"Tired of this newsletter? Click unsubscribe below to stop receiving this newsletter.",
      unsubscribe: "Unsubscribe",
      link: "https://delsner.github.io/newsletter"
    },
    imprint: {
      company:"Company Inc.",
      street: "North Street 1",
      city: "12323 Newsletter-Town",
      website: "http://delsner.github.io/newsletter",
      responsibilities: "Chairmen: John News & Jake Letter"
    }
  }

  constructor(public appState: AppState) {
  }

  ngOnInit() {
  }

  addSection() {
    this.email.sections.push({
        heading:"Heading",
        text: "Text",
        img: "https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-62-128.png",
        button: "Continue reading...",
        link: "https://delsner.github.io/newsletter"
      });
  }

  removeSection() {
    this.email.sections.pop();
  }
}
