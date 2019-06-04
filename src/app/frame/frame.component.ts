import { Component, OnInit } from '@angular/core';
import {log} from 'util';


@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  basicurl: string;
  pics: number;


  constructor() { }

  ngOnInit() {
    this.basicurl = 'https://mancioboxblog.altervista.org/ebay/box/mini/';
    this.pics = 28;
}

  counter(i: number) {
    return new Array(i);
  }

  radomize(min: number, max: number){
    let ran;
    ran = Math.floor(Math.random() * (max - min + 1)) + min;
    log(ran);
    return ran;
  }

}
