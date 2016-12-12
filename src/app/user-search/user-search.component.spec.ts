/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import {UserSearchResultsComponent} from "./user-search-results/user-search-results.component";
import {UserSearchResultComponent} from "./user-search-results/user-search-result/user-search-result.component";
import {UserSearchTotalsComponent} from "./user-search-totals/user-search-totals.component";
import {UserSearchInputComponent} from "./user-search-input/user-search-input.component";
import {UserSearchService} from "./user-search-service/user-search-service";
import {UserSearchServiceFake} from "./user-search-service/user-search-service.fake";

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserSearchComponent,
        UserSearchInputComponent,
        UserSearchResultsComponent,
        UserSearchResultComponent,
        UserSearchTotalsComponent
      ],
      providers: [
        { provide: UserSearchService, useClass: UserSearchServiceFake }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
