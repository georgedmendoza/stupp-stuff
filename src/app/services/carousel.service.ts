import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Carousel} from '../models/carousel/carousel'
import {Project} from '../models/project';
// import '../../assets/carousel.json';
// ./carousle

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }
  getCarousel() {
    return this.http.get<any>('assets/carousel.json')
      .toPromise()
      .then(res => <Carousel[]>res.data)
      .then(data => { return data; });
  }

  getProject(id: string) {
    return this.http.get<any>(`assets/carousel.json[1]`)
      .toPromise()
      .then(res => 
        <Project[]>res.data[1])
      .then(data => { 
        console.log(data + 'this is data');
        
        return data; });
  }
  
}
