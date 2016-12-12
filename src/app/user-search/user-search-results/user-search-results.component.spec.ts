/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchResultsComponent } from './user-search-results.component';
import {UserSearchResultComponent} from "./user-search-result/user-search-result.component";
import {By} from "@angular/platform-browser";

describe('UserSearchResultsComponent', () => {
  let component: UserSearchResultsComponent;
  let fixture: ComponentFixture<UserSearchResultsComponent>;
  let resultEls;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserSearchResultsComponent,
        UserSearchResultComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchResultsComponent);
    component = fixture.componentInstance;

    component.users = [
      { name: 'Jane Doe', email: 'JaneDoe@mail.com'},
      { name: 'John Doe', email: 'JohnDoe@mail.com'},
      { name: 'Joan Doe', email: 'JoanDoe@mail.com'},
      { name: 'James Doe', email: 'JamesDoe@mail.com'},
      { name: 'Jess Doe', email: 'JessDoe@mail.com'}
    ];

    fixture.detectChanges();

    resultEls = fixture.debugElement.queryAll(By.css('app-user-search-result'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of user-search-result when users is populated', () => {
    expect(resultEls.length).toBeGreaterThan(1)
  });
});
