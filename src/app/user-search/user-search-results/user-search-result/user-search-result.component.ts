import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-search-result',
  templateUrl: './user-search-result.component.html',
  styleUrls: ['./user-search-result.component.sass']
})
export class UserSearchResultComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
