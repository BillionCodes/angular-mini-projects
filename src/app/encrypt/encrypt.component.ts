import { Component, OnInit } from '@angular/core';
import { isString } from 'util';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {
  converted: string;
  text: string;
  temp: number;
  key: number;
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
  constructor() { }
  translate() {
    this.converted = '';
    for (let i = 0; i < this.text.length; i++) {
      for (let j = 0; j < this.letters.length; j++) {
        if (this.letters[j] === this.text[i] ) {
          this.temp = j + this.key;
          this.converted += String(this.temp) + ' ';
        }
      }
      if (this.text[i] === ' ') {
        this.converted += '  ';
      }
      // else {
      //   this.converted += this.text[i];
      // }
    }
  }
  ngOnInit() {
    this.converted = '';

  }

}
