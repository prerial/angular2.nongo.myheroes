import { Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../html/app.component.html',
  styleUrls: [ '../css/app.component.css' ]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
}
