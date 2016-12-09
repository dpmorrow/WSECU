import {Component, OnInit, Input} from '@angular/core';
import {User} from "./models/User";
import {UserSearchService} from "./user-search-service/user-search-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.sass']
})
export class UserSearchComponent implements OnInit {
  users: User[];
  rawUsers: User[]
  totalUsers: number;
  totalMatchingUsers: number;
  searchTerm: string;
  userResultsSubscription: Subscription;
  searchTermSubscription: Subscription;
  @Input() search: string;

  constructor(private userSearchService: UserSearchService) {
    this.users = this.rawUsers = userSearchService.getRawUsers();
    this.totalUsers = this.rawUsers.length;

    this.userResultsSubscription = userSearchService.userResults$.subscribe(
        userResults => {
          this.users = userResults;
          this.totalMatchingUsers = userResults.length;
        }
    )

    this.searchTermSubscription = userSearchService.searchTerm$.subscribe(
        searchTerm => {
          this.searchTerm = searchTerm;
        }
    )
  }

  ngOnInit() {
  }

}
