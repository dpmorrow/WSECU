/* tslint:disable:no-unused-variable */
import { Observable } from "rxjs";
export class UserSearchServiceFake {
  //noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
  executeSearch(search: string) {
  }
  //noinspection JSUnusedGlobalSymbols
  userResults$ = Observable.of([
      { name: 'Jane Doe', email: 'JaneDoe@mail.com'},
      { name: 'John Doe', email: 'JohnDoe@mail.com'},
      { name: 'Joan Doe', email: 'JoanDoe@mail.com'},
      { name: 'James Doe', email: 'JamesDoe@mail.com'},
      { name: 'Jess Doe', email: 'JessDoe@mail.com'}
    ]);

  //noinspection JSUnusedGlobalSymbols
  searchTerm$ = Observable.of('term');

  //noinspection JSUnusedGlobalSymbols
  initialize(){}
}
