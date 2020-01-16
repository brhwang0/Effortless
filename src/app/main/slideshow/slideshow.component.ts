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
    {url: 'assets/images/slide-icons.png'},
    {url: 'assets/images/slide-people.jpg'},
  ];
}
