import { Component, OnInit } from '@angular/core';
import {Image} from './img.model';


@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  basicurl: 'https://mancioboxblog.altervista.org/ebay/box/mini/';

  images = Image[Image.length] = [
    new Image(this.basicurl + '1.jpeg','l')

  ];



  constructor() { }

  ngOnInit() {
  }

}
