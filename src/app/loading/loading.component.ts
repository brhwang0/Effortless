import { Component, OnInit} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/data.json'
  };

  styles: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  constructor() {
  }

  ngOnInit() {
  }
}
