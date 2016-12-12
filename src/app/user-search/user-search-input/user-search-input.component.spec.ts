/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchInputComponent } from './user-search-input.component';
import {UserSearchService} from "../user-search-service/user-search-service";
import {UserSearchServiceFake} from "../user-search-service/user-search-service.fake";

describe('UserSearchInputComponent', () => {
  let component: UserSearchInputComponent;
  let fixture: ComponentFixture<UserSearchInputComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
