import { Component, Input, OnInit } from '@angular/core';
import { faBed, faHome, faBath } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  faBed = faBed;
  faHome = faHome;
  faBath = faBath;

  loading: boolean = true;
  @Input() property: any;
  constructor() {}
  ngOnInit(): void {}
  onLoad() {
    this.loading = false;
  }
}
