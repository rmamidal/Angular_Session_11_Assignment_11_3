import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './Component/movie.component';
import { SearchPipe } from "./Pipe/search.pipe";
import { CapitalisePipe } from "./Pipe/capitalise.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SearchPipe,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MovieComponent]
})
export class AppModule { }
