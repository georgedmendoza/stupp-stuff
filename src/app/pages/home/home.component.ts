import { Component, OnInit } from '@angular/core';
import {CarouselService} from '../../services/carousel.service'
import {Carousel} from '../../models/carousel/carousel';
import { ImageService } from '../../services/images.service';

import  data  from '../../../assets/carousel.json';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carousel: Carousel[] = [];

  constructor(private carouselServices:CarouselService) { }

  ngOnInit(): void {
   this.carouselServices.getCarousel().then(carousel => {
     this.carousel = carousel;
   })
  }

}
