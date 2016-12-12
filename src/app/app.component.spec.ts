/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {UserSearchComponent} from "./user-search/user-search.component";
import {UserSearchResultComponent} from "./user-search/user-search-results/user-search-result/user-search-result.component";
import {UserSearchResultsComponent} from "./user-search/user-search-results/user-search-results.component";
import {UserSearchTotalsComponent} from "./user-search/user-search-totals/user-search-totals.component";
import {UserSearchService} from "./user-search/user-search-service/user-search-service";
import {UserSearchServiceFake} from "./user-search/user-search-service/user-search-service.fake";
import {UserSearchInputComponent} from "./user-search/user-search-input/user-search-input.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserSearchComponent,
        UserSearchInputComponent,
        UserSearchResultsComponent,
        UserSearchResultComponent,
        UserSearchTotalsComponent
      ],
      providers: [
        { provide: UserSearchService, useClass: UserSearchServiceFake }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a user-search component`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-user-search')).toBeTruthy();
  }));
});
