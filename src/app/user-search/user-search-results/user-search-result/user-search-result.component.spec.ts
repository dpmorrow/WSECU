/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserSearchResultComponent } from './user-search-result.component';
import {User} from "../../models/User";

describe('UserSearchResultComponent', () => {
  let component: UserSearchResultComponent;
  let fixture: ComponentFixture<UserSearchResultComponent>;
  let expectedUser: User = { name: 'Jane Doe', email: 'JaneDoe@mail.com'};
  let nameEl;
  let emailEl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchResultComponent);
    component = fixture.componentInstance;
    nameEl = fixture.debugElement.query(By.css('.user-name'));
    emailEl = fixture.debugElement.query(By.css('.user-email'));

    component.user = expectedUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the user', () => {
    expect(nameEl.nativeElement.textContent).toContain(expectedUser.name);
  });

  it('should display the email of the user', () => {
    expect(emailEl.nativeElement.textContent).toContain(expectedUser.email);
  });
});
