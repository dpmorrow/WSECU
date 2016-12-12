import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearchResultsComponent } from './user-search/user-search-results/user-search-results.component';
import { UserSearchResultComponent } from './user-search/user-search-results/user-search-result/user-search-result.component';
import { UserSearchInputComponent } from './user-search/user-search-input/user-search-input.component';
import { UserSearchService } from './user-search/user-search-service/user-search-service';
import { UserSearchTotalsComponent } from './user-search/user-search-totals/user-search-totals.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserSearchResultsComponent,
    UserSearchResultComponent,
    UserSearchInputComponent,
    UserSearchTotalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: UserSearchService, useClass: UserSearchService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
