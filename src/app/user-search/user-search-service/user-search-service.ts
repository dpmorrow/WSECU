import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable()
export class UserSearchService {

  private searchTermSource = new Subject<string>();
  private userResultsSource = new Subject<User[]>();
  private rawUsers: User[];

  searchTerm$: Observable<string> = this.searchTermSource.asObservable();
  userResults$: Observable<User[]> = this.userResultsSource.asObservable();

  constructor() {
    this.rawUsers = [
      { name: 'Jane Doe', email: 'JaneDoe@mail.com'},
      { name: 'John Doe', email: 'JohnDoe@mail.com'},
      { name: 'Joan Doe', email: 'JoanDoe@mail.com'},
      { name: 'James Doe', email: 'JamesDoe@mail.com'},
      { name: 'Jess Doe', email: 'JessDoe@mail.com'}
    ];
  }

  getRawUsers() {
    return this.rawUsers;
  }

  executeSearch(search: string) {
    search = search.toUpperCase();
    this.searchTermSource.next(search);

    var users = this.rawUsers.filter(u => {
      return u.name.toUpperCase().includes(search) || u.email.toUpperCase().includes(search);
    });

    this.userResultsSource.next(users)
    // TODO: DO SEARCH
  }
}
