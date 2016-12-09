import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-search-totals',
  templateUrl: './user-search-totals.component.html',
  styleUrls: ['./user-search-totals.component.sass']
})
export class UserSearchTotalsComponent implements OnInit {
  @Input() totalMatchingUsers: number;
  @Input() totalUsers: number;
  @Input() searchTerm: string;
  constructor() { }

  ngOnInit() {
  }

}
