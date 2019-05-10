import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    'Abteilung 1', 'Abteilung 2', 'Abteilung 3',
    'Abteilung 4', 'Abteilung 5', 'Abteilung 6'
  ];
}
