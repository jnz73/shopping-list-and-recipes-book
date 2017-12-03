import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  // name of the component
  selector: 'app-root',
  // path to the html file
  templateUrl: './app.component.html',
  // path to the relative css file
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    // tracks wich feature to show selected from header (recipes or shopping list)
    this.loadedFeature = feature;
  }

  ngOnInit() {
    // credentials for the firebase account
    firebase.initializeApp({
      apiKey: 'AIzaSyDyfiG-4s7z9kiu1Pf3Scfvo7EFMFzLwtA',
      authDomain: 'ng-recipe-boo.firebaseapp.com',
    });
  }

}
