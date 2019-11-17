import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  @Input() movie;
  constructor() { }

  ngOnInit() {
    console.log(this.movie);
  }

}
