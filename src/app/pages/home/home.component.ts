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

//  items = [
//   {"id":1, "name":"pic1", "url": "../../assets/images/pic1.jpg"},
//   {"id":2, "name":"pic2", "url": "../../assets/images/pic2.jpg"},
//   {"id":3, "name":"pic3", "url": "../../assets/images/pic3.jpg"},
//   {"id":4, "name":"pic4", "url": "../../assets/images/pic4.jpg"},
//   {"id":5, "name":"pic5", "url": "../../assets/images/pic5.jpg"},
//   {"id":6, "name":"pic6", "url": "../../assets/images/pic6.jpg"},
// ]



  constructor(private carouselServices:CarouselService) { }

  ngOnInit(): void {
   this.carouselServices.getCarousel().then(carousel => {
     this.carousel = carousel;
   })
  }

}
