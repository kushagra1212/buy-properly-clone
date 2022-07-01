import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  LoadProperties,
  UpdateOffset,
} from 'src/app/store/properties/properties.actions';
import {
  getErrorFromProperties,
  getproperties,
  getPropertiesOffsetAndLimit,
} from 'src/app/store/properties/properties.selector';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  totalPropertyCount: 0;
  propertyList: any[];
  errMessage: string;
  pageNumber = 1;
  itemsPerPage = 5;
  config: any;
  isLoading: Boolean = true;
  constructor(private store: Store) {
    this.totalPropertyCount = 0;
    this.propertyList = [];
    this.errMessage = '';
    this.config = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.pageNumber,
      totalItems: this.totalPropertyCount,
    };
  }
  getData() {
    this.store.dispatch(new LoadProperties());
    this.store.pipe(select(getproperties)).subscribe((data: any) => {
      this.propertyList = data.data;
      this.totalPropertyCount = data.totalCount;
      this.config.totalItems = data.totalCount;
      this.isLoading = false;
    });

    this.store.pipe(select(getErrorFromProperties)).subscribe((err) => {
      this.errMessage = err;
      this.isLoading = false;
    });
    this.scrollToTop();
  }
  getPropertyList(): void {
    this.store
      .pipe(select(getproperties))
      .subscribe(({ data, totalCount }: any) => {
        if (data.length == 0) {
          this.getData();
        } else {
          this.propertyList = data;
          this.totalPropertyCount = totalCount;
          this.store
            .pipe(select(getPropertiesOffsetAndLimit))
            .subscribe(({ limit, offset }) => {
              this.config = {
                itemsPerPage: limit,
                currentPage: Math.floor(Number(offset) / Number(limit)) + 1,
                totalItems: totalCount,
              };
            });
        }
      });
  }

  getNextData(page: any) {
    this.isLoading = true;
    this.store.dispatch(
      new UpdateOffset({ offset: (page - 1) * this.itemsPerPage })
    );
    this.pageNumber = page;
    this.config = { ...this.config, currentPage: page };
    this.getData();
  }
  ngOnInit(): void {
    this.getPropertyList();
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
