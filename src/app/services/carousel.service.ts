import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Carousel} from '../models/carousel/carousel'
// import '../../assets/carousel.json';
// ./carousle

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }
  getCarousel() {
    return this.http.get<any>('./carousel.json')
      .toPromise()
      .then(res => <Carousel[]>res.data)
      .then(data => { return data; });
  }
  
}
