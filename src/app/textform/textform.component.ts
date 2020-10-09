import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-textform',
  templateUrl: './textform.component.html',
  styleUrls: ['./textform.component.css']
})
export class TextformComponent implements OnInit {
  alt = '';
  text = '';
  change = '';
  opts: string[];
  temp = '';
  i: number;
  j: number;
  isThere: boolean;

  constructor() { this.isThere = false; }

  txtGetter(value: string) {
    this.temp = value;
    this.opts = [null];
    this.listGetter(value);
  }
  listGetter(val: string) {
    for (this.i = 0; this.i < val.length; this.i++) {
      for (this.j = 0; this.j < this.opts.length; this.j++) {
        if ( val[this.i] === this.opts[this.j]) {
          this.isThere = true;
        }
      }
      if (!this.isThere) {
        this.opts.push(val[this.i]);
          console.log(this.opts);
      }
      this.isThere = false;
    }
  }
  format() {
    for (this.i = 0 ; this.i < this.text.length; this.i++) {
      this.text = this.text.replace(this.change, this.alt);
    }
  }
  ngOnInit() {
    this.opts = [null];
  }

}
