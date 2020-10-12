import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ICarteleraResp, Movie } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnDestroy {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])

  //Se ejecuta al hacer scroll
  onScroll() {
    //obteniendo la posicion de la pagina
    const position =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1305; //aumentando la cantidad por diferencia entre cantidad real
    //obteniendo la posicion maxima del scrol
    const positionMax =
      document.documentElement.scrollHeight || document.body.scrollHeight;
 //   console.log({ position, positionMax });

    if (position > positionMax) {
      if(this._ps.cargando){ return} //eliminar errores de ejecucion
      this._ps.getCartelera().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private _ps: ServicesService) {}

  ngOnInit(): void {
    this._ps.getCartelera().subscribe((movies) => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }

  ngOnDestroy(){
    this._ps.resetCarteleraPage();
  }
}
