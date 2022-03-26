import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable() 
export class ImageService {
    allImages: any[] = [];

    getImages() {
        return this.allImages = Imagesdelatils.slice(0,Imagesdelatils.length-1);
        console.log(this.allImages)
        
    }

    getImage(id: number) {
        return Imagesdelatils.slice(0).find(Images => Images.id == id)
    }
}

const Imagesdelatils = [
    {"id":1, "name":"pic1", "url": "../../assets/images/pic1.jpg"},
    {"id":2, "name":"pic2", "url": "../../assets/images/pic2.jpg"},
    {"id":3, "name":"pic3", "url": "../../assets/images/pic3.jpg"},
    {"id":4, "name":"pic4", "url": "../../assets/images/pic4.jpg"},
    {"id":5, "name":"pic5", "url": "../../assets/images/pic5.jpg"},
    {"id":6, "name":"pic6", "url": "../../assets/images/pic6.jpg"},
]