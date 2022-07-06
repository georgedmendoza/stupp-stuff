import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselService } from './services/carousel.service'

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

// primeng
import {CarouselModule} from 'primeng/carousel';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

// import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule, CarouselModule, 
  ],
  providers: [CarouselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
