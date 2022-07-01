import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { PropertyService } from 'src/app/core/services/property/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  faBook = faBook;
  faCalendar = faCalendar;
  carousel = {
    height: 380,
    width: 380,
  };
  images = [];
  propertySlurp: any;
  property: any;
  loading: Boolean = true;
  isImageLoading: Boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) {}
  getPropertyDetails(): void {
    this.propertyService
      .getPropertyDetails(this.propertySlurp)
      .subscribe((data) => {
        this.property = data;
        this.loading = false;
        this.addImagesToCarousal(data);
      });
  }
  addImagesToCarousal(data: any): void {
    this.images = data.images.slice(2).map((ele: any) => ({
      path: ele,
    }));
  }
  ngOnInit(): void {
    this.propertySlurp =
      this.activatedRoute.snapshot.paramMap.get('property-slurp');
    this.getPropertyDetails();
  }
  onLoad() {
    this.isImageLoading = false;
  }
}
