import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { Movie } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  texto:string ="";
  movie:Movie[];
  constructor(private activatedRoute:ActivatedRoute, private _ps:ServicesService) //obtener valores mediante el url
   { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(resp=>{
      this.texto = resp.texto;
      this._ps.buscarPelicula(resp.texto).subscribe(pelicula=>{
        this.movie = pelicula;
        console.log(pelicula);
      })
    })
  }

}
