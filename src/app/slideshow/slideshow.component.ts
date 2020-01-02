import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
      setTimeout(showSlides, 2000); // Change image every 2 seconds
      var i;
      var slides = document.getElementsByClassName("slide");

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      if (slideIndex < 1) {
        slideIndex = slides.length
      }

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "flex";
      slideIndex++;
    }

  }



}
