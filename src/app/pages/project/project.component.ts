import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

import {CarouselService} from '../../services/carousel.service'
import {Carousel} from '../../models/carousel/carousel';

import { Project } from 'src/app/models/project';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: Project[] = [];
  currentRoute: number;
  currentImage: number;

  constructor(private projectServices:CarouselService, private router: Router) {
    console.log(router.url[router.url.length-1] + "this is route.url");
    this.currentRoute = Number(router.url[router.url.length-1]);
    console.log(this.currentRoute)
    this.currentImage = this.currentRoute-1;
    
   }

    ngOnInit(): void {
      this.projectServices.getCarousel().then(project => {
        this.project = project;
        console.log(this.project);
      })
  }

  // getProject(id: string) {
  //   this.projectServices.getProject(id).then(project => {
  //     this.project = project;
  //       console.log(this.project);
  //   })
  // }

}
