import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { FilterByFirstNamePipe } from './filter.pipe';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilterByFirstNamePipe,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
