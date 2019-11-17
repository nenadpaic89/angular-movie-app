import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieList } from '../shared/dataset';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  movies = movieList;
  movie = null;
  constructor(private route:  ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(r => {
       this.movie = this.movies.find(m => m.id == r.id);
    });
  }

}
