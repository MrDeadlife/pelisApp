import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; //
import { MovieDatails } from '../../interfaces/cartelera-response';
import { Cast } from '../../interfaces/MovieCredits.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  public pelicula: MovieDatails;
  public castap: Cast[] = [];
  constructor(
    private _ps: ServicesService,
    private activateRoute: ActivatedRoute,
    private Location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    const { id } = this.activateRoute.snapshot.params;

    //ejecuta un codigo al obtener respuesta de todos los observables dentro
    combineLatest([
      this._ps.getMovieDetail(id),
      this._ps.getCast(id),
    ]).subscribe(([pelicula, cast]) => { //desestructuracion de arreglo
      //console.log(pelicula, cast);
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = pelicula;
     this.castap = cast.filter(actor => actor.profile_path != null);
    });

    /*  this._ps.getMovieDetail(id).subscribe((movie) => {
      console.log(movie);
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie;
    });

    this._ps.getCast(id).subscribe((cast) => {
      //console.log(cast);
      return (this.castap = cast.filter(actor => actor.profile_path != null));
    });
    */
  }
  onRegresar() {
    this.Location.back();
  }
}
