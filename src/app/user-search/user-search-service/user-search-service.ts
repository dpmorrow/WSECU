import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from "../models/User";
import { Observable } from "rxjs";
import { Response, Http } from "@angular/http";

@Injectable()
export class UserSearchService {

  private searchTermSource = new Subject<string>();
  private userResultsSource = new Subject<User[]>();
  private rawUsers: User[] = [];
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  searchTerm$: Observable<string> = this.searchTermSource.asObservable();
  userResults$: Observable<User[]> = this.userResultsSource.asObservable();

  constructor(private http: Http) {
  }

  initialize() {
    this.userResultsSource.next([]);
    this.http
        .get(this.usersUrl)
        .map(UserSearchService.extractData)
        .subscribe(
            data => {
              this.rawUsers = data;
              this.userResultsSource.next(data);
            },
            error => UserSearchService.handleError(error),
            () => {
              console.log('loaded users');
            }
        );
  }

  executeSearch(search: string) {
    this.searchTermSource.next(search);
    search = search.toUpperCase();

    let users = this.rawUsers.filter(u => {
      return u.name.toUpperCase().includes(search) || u.email.toUpperCase().includes(search);
    });

    this.userResultsSource.next(users);
  }

  private static extractData(response: Response) {
    let body = response.json();
    return body || [];
  }

  private static handleError (error: Response | any) {
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
