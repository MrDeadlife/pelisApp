import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
//utilizar routerlink
import { RouterModule } from '@angular/router';
import { SalideshowComponent } from './salideshow/salideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component'; 
//ponderacion con estrellas
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';


@NgModule({
  declarations: [NavbarComponent, SalideshowComponent, PeliculasPosterGridComponent, CastSlideShowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports:[NavbarComponent,SalideshowComponent,PeliculasPosterGridComponent,CastSlideShowComponent]
})
export class ComponentsModule { }
