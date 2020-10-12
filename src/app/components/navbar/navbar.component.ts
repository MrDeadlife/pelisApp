import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) //navegar entre pag
   {}

  ngOnInit(): void {}

  buscarPelicula(pelicula: string) {
    pelicula = pelicula.trim();
    console.log(pelicula);
    if (pelicula.length === 0) {
      return;
    }
    this.router.navigate(['/buscar', pelicula])
  }
}
