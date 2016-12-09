import {Component, OnInit, Input} from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.sass']
})
export class UserSearchComponent implements OnInit {
  users: User[];
  @Input() search: string;

  constructor() {
    this.users = [{ name: 'Jane Doe', email: 'JaneDoe@mail.com'},{ name: 'John Doe', email: 'JohnDoe@mail.com'}];
  }

  ngOnInit() {
  }

}
