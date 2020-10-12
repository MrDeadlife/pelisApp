import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICarteleraResp, Movie } from '../interfaces/peliculas.interface';
import { Observable, of } from 'rxjs'; //of genera un observable
import { tap, map, catchError } from 'rxjs/operators'; // tap ejecuta el codigo cada vez que el observable emite un valor
import { MovieDatails } from '../interfaces/cartelera-response';
import { IMovieCredits, Cast } from '../interfaces/MovieCredits.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private baseUrl = ' https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando = false;
  pelicula: MovieDatails;
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '0a4a29a9ec3b6befd7ee52771e628edf',
      languaje: 'es-Es',
      page: this.carteleraPage.toString(),
    };
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    //respuesta tipo ICartelera
    return this.http
      .get<ICarteleraResp>(`${this.baseUrl}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          //tap solo ejecuta un codigo al recibir cambios del observable
          this.carteleraPage += 1; //aumentando el valor de la pagina para el infineScrol
          this.cargando = false;
        })
      );
  }

  buscarPelicula(pelicula: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: pelicula };

    return this.http
      .get<ICarteleraResp>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getMovieDetail(id: string): Observable<MovieDatails> {
    return this.http
      .get<MovieDatails>(`${this.baseUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((err) => of(null)));
  }
  getCast(id: string): Observable<Cast[]> {
    return this.http
      .get<IMovieCredits>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((err) => of([]))
      );
  }
}
