/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserSearchTotalsComponent } from './user-search-totals.component';

describe('UserSearchTotalsComponent', () => {
  let component: UserSearchTotalsComponent;
  let fixture: ComponentFixture<UserSearchTotalsComponent>;
  let totalsEl;
  let expectedSearchTerm = 'term';

  function getTotalsElement() {
    return fixture.debugElement.query(By.css('.user-search-totals'));
  }

  function setupWithTermPresent() {
    component.searchTerm = expectedSearchTerm;

    fixture.detectChanges();

    totalsEl = getTotalsElement();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the totals if there is a blank search term', () => {
    totalsEl = getTotalsElement();
    expect(totalsEl).not.toBeTruthy();
  });

  it('should display the search term', () => {
    setupWithTermPresent();

    expect(totalsEl.nativeElement.textContent).toContain(expectedSearchTerm);
  });
});
