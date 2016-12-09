import {Component, OnInit, Input} from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.sass']
})
export class UserSearchComponent implements OnInit {
  @Input() users: User[];

  constructor() {
    this.users = [{ name: 'user1', email: 'user1'},{ name: 'user2', email: 'user2'}];
  }

  ngOnInit() {
  }

}
