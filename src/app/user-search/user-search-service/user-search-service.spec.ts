/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UserSearchService } from './user-search-service';
import {HttpModule} from "@angular/http";

describe('UserSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSearchService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([UserSearchService], (service: UserSearchService) => {
    expect(service).toBeTruthy();
  }));
});
