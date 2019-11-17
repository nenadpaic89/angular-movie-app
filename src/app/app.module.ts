import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MovieListComponent,
    SingleMovieComponent,
    DetailMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '',   redirectTo: '/movies', pathMatch: 'full' },
        {path: 'movies', component: MovieListComponent},
        {path: 'movies/:id', component: DetailMovieComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
