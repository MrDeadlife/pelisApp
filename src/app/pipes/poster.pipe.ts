import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster',
})
export class PosterPipe implements PipeTransform {
  transform(poster: string): string {
    if (poster) {
      return `https://image.tmdb.org/t/p/w500/${poster}`;
    }else if(poster === 'Null' ){
      console.log("null");
      return '../assets/img/no-image.jpg'
    }else if(!poster ){
      console.log("!poster");
      return '../assets/img/no-image.jpg'
    }
  }
}
