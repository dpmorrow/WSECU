/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchInputComponent } from './user-search-input.component';
import {UserSearchService} from "../user-search-service/user-search-service";
import {UserSearchServiceFake} from "../user-search-service/user-search-service.fake";
import {By} from "@angular/platform-browser";
import {click} from "../../../test-helpers/click";

describe('UserSearchInputComponent', () => {
  let component: UserSearchInputComponent;
  let fixture: ComponentFixture<UserSearchInputComponent>;
  let searchButtonEl;
  let searchInputEl;
  let expectedTerm = 'term';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchInputComponent ],
      providers: [
          { provide: UserSearchService, useClass: UserSearchServiceFake }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchInputComponent);
    component = fixture.componentInstance;
    searchInputEl = fixture.debugElement.query(By.css('.user-search-input'));
    searchButtonEl = fixture.debugElement.query(By.css('.user-search-button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call doSearch when search button is clicked', () => {
    searchInputEl.nativeElement.value = expectedTerm;
    spyOn(component, 'doSearch');
    click(searchButtonEl);
    expect(component.doSearch).toHaveBeenCalledWith(expectedTerm);
  });
});
