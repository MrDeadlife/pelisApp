import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Movie } from '../../interfaces/peliculas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css'],
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onMovieClick(pelicula: Movie) {
    //console.log(pelicula);
    this.router.navigate(['/pelicula', pelicula.id]);
  }
}
