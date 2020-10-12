import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICarteleraResp, Movie } from '../../interfaces/peliculas.interface';
// import Swiper bundle with all modules installed
import Swiper from 'swiper';

@Component({
  selector: 'app-salideshow',
  templateUrl: './salideshow.component.html',
  styleUrls: ['./salideshow.component.css'],
})
export class SalideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  mySwiper: Swiper;
  constructor() {}

  ngOnInit(): void {}
  
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  onSlideNext() {
    this.mySwiper.slideNext();
  }

  onSlidePrev() {
    this.mySwiper.slidePrev();
  }
}
