import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodaysMenuComponent} from './todays-menu.component';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {DishCardComponent} from '../dish-card/dish-card.component';
import {DishCarouselComponent} from '../dish-carousel/dish-carousel.component';
import {MatProgressButtonsModule} from 'mat-progress-buttons';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AverageStarsComponent} from '../average-stars/average-stars.component';

describe('TodaysMenuComponent', () => {
  let component: TodaysMenuComponent;
  let fixture: ComponentFixture<TodaysMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysMenuComponent, DishCardComponent, DishCarouselComponent, AverageStarsComponent],
      imports: [FormsModule, MatSelectModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatProgressButtonsModule.forRoot(),
        NgxHmCarouselModule, LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}), BrowserAnimationsModule, HttpClientTestingModule,
      MatSlideToggleModule, MatFormFieldModule, MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
