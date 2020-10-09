import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { strictEqual } from 'assert';
import { isString } from 'util';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  temp: string;
  firstArg: number;
  result: number;
  currentOp = '';
  op = false;
  calc() {
     if (this.currentOp === '+') {
       this.result = this.firstArg + this.result;
     } else if (this.currentOp === '-') {
       this.result = this.firstArg - this.result;
     } else if (this.currentOp === 'x') {
       this.result = this.firstArg * this.result;
     } else if (this.currentOp === '/') {
       this.result = this.firstArg / this.result;
     } else {
     }
  }

  del() {
    this.temp = this.temp.slice( 0 , this.temp.length - 1);
    this.result = Number(this.temp);
  }
  btnUpdate(val: any) {
    if (isString(val)) {
      if ( val === 'CE' || val === 'C') { // check if the user clicked clear inputs and perform action
        this.firstArg = 0;
        this.currentOp = '';
        this.result = 0;
        val = '';
      }
      // if not then the user entered a operator so the first operand becomes result
      // move the result to the first arg and operator to currentOp variable then wait for next operand
      this.currentOp = val;
      this.firstArg = this.result;
      this.result = null;
      this.temp = '';
    } else {
      // concatenate the numbers on the calculator
      this.temp += val;
      this.result = Number(this.temp);
    }
  }
  constructor(private _auth: AuthService) {
    this.result = null;
    this.temp = '';
   }

  ngOnInit() {
    //  this.lst = this._auth.postIt(this._auth.lst).subscribe( data => (console.log(data)));
  }

}
