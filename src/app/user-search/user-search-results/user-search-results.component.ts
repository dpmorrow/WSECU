import {Component, OnInit, Input} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
  styleUrls: ['./user-search-results.component.sass']
})
export class UserSearchResultsComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
