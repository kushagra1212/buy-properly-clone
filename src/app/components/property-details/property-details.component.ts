import { Component, OnInit } from '@angular/core';
import { faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  faBook = faBook;
  faCalendar = faCalendar;
  constructor() {}

  ngOnInit(): void {}
}
