import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() {
    this.preloadImages();
  }

  ngOnInit() {
  }

  currentIndex = 0;
  slides = [
    {image: 'assets/images/slide-icons.png'},
    {image: 'assets/images/slide-people.jpg'},
  ];

  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide.image;
    });
  }

  setCurrentSlideIndex(index) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }


}
