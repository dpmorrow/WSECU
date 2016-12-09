import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {User} from "../models/User";
import {Observable, Subscription} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class UserSearchService {

  private searchTermSource = new Subject<string>();
  private userResultsSource = new Subject<User[]>();
  private rawUsers: User[] = [];
  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  searchTerm$: Observable<string> = this.searchTermSource.asObservable();
  userResults$: Observable<User[]> = this.userResultsSource.asObservable();

  constructor(private http: Http) {
    /*this.rawUsers = [
      { name: 'Jane Doe', email: 'JaneDoe@mail.com'},
      { name: 'John Doe', email: 'JohnDoe@mail.com'},
      { name: 'Joan Doe', email: 'JoanDoe@mail.com'},
      { name: 'James Doe', email: 'JamesDoe@mail.com'},
      { name: 'Jess Doe', email: 'JessDoe@mail.com'}
    ];*/
  }

  initialize() {
    this.userResultsSource.next([]);
    this.http
        .get(this.usersUrl)
        .map(this.extractData)
        .subscribe(
            data => {
              this.rawUsers = data;
              this.userResultsSource.next(data);
            },
            error => this.handleError(error),
            () => {
              console.log('loaded users');
            }
        );
  }

  executeSearch(search: string) {
    this.searchTermSource.next(search);
    search = search.toUpperCase();

    var users = this.rawUsers.filter(u => {
      return u.name.toUpperCase().includes(search) || u.email.toUpperCase().includes(search);
    });

    this.userResultsSource.next(users);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || [];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
