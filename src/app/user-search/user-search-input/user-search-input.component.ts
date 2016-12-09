import { Component, OnInit } from '@angular/core';
import {UserSearchService} from "../user-search-service/user-search-service";

@Component({
  selector: 'app-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.sass']
})
export class UserSearchInputComponent implements OnInit {

  constructor(private userSearchService: UserSearchService) { }

  ngOnInit() {
  }

  doSearch(search: string) {
    this.userSearchService.executeSearch(search);
  }
}
