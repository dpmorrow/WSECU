/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UserSearchService } from './user-search-service';
import {HttpModule, BaseRequestOptions, Http, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

describe('UserSearchService', () => {

  function setupMockBackend(mockBackend: MockBackend) {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: require('./user-search-service-mock-response.json')
          })
        ))
      }
    )
  }

  beforeEach(() => {
    //noinspection JSUnusedGlobalSymbols
    TestBed.configureTestingModule({
      providers: [
        UserSearchService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should create', inject([UserSearchService], (service: UserSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide subscribers a list of users', inject([UserSearchService, MockBackend], (service: UserSearchService, mockBackend) => {
    setupMockBackend(mockBackend);

    service.initialize();

    service.userResults$.subscribe(userResults => {
      expect(userResults.length).toBeGreaterThan(0);
      expect(typeof userResults).toBe('Array<User>');
    });
  }));

  it('should provide subscribers the search term after a search', inject([UserSearchService], (service: UserSearchService) => {
    let expectedTerm = 'term';
    service.executeSearch(expectedTerm);

    service.searchTerm$.subscribe(searchTerm => {
      expect(searchTerm).toBe(expectedTerm);
    });
  }));

});
