import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  tables: string[] = [];
  mov: string;
  constructor() { }

  move() {
    if (this.tables[Number(this.mov)] === '') {
      this.tables[Number(this.mov)] = 'X';
    } else {
      console.log('Not Empty!');
    }
    this.mov = '';
  }
  ngOnInit() {
    this.mov = null;
    for (let i = 0; i < 9; i++) {
      this.tables[i] = '';
    }
  }

}
