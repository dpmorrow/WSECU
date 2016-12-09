import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearchResultsComponent } from './user-search/user-search-results/user-search-results.component';
import { UserSearchResultComponent } from './user-search/user-search-results/user-search-result/user-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserSearchResultsComponent,
    UserSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
