import { Component, OnInit } from '@angular/core';
import { movieList } from '../shared/dataset';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = movieList;
  constructor() { }

  ngOnInit() {
    console.log('Movies', this.movies);
  }

}
