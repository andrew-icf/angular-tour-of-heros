import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import './rxjs-extensions';

//Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { UserService }          from './user.service';
import { AppRoutingModule }     from './app-routing.module';
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';
// import { AwesomePipe } from './contact/awesome.pipe';
// import { ContactComponent } from './contact/contact.component';
// import { HeroSearchService } from "./hero-search.service";
import { HeroSearchComponent } from './hero-search.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import {AwesomePipe} from "./contact/awesome.pipe";
import {ContactComponent} from "./contact/contact.component";
import {ContactService} from "./contact/contact.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    TitleComponent,
    HighlightDirective,
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [
    HeroService,
    UserService,
    ContactService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
