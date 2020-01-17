import { Component, OnInit } from '@angular/core';
import { slideAnimation } from './slide.animation';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [slideAnimation]
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides = [
    {url: 'assets/images/slide-1.jpg'},
    {url: 'assets/images/slide-2.png'},
  ];
}
