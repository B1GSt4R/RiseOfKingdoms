import { Component, OnInit } from '@angular/core';

export class DkpStat {
  t4kills: number = 1018938;
  t5kills: number = 548070;
  t4deaths: number = 0;
  t5deaths: number = 0;
  honor: number = 0;
  prekvk: number = 1058000;
  // 21%
}

@Component({
  selector: 'app-dkp',
  templateUrl: './dkp.component.html',
  styleUrls: ['./dkp.component.scss'],
})
export class DkpComponent implements OnInit {
  first: DkpStat = new DkpStat();
  second: DkpStat = new DkpStat();
  third: DkpStat = new DkpStat();
  needed: number = 4977190;
  neededP: number = 17;

  constructor() {}

  ngOnInit(): void {
    this.first = JSON.parse(
      localStorage.getItem('first') || JSON.stringify(new DkpStat())
    );
    this.second = JSON.parse(
      localStorage.getItem('second') || JSON.stringify(new DkpStat())
    );
    this.third = JSON.parse(
      localStorage.getItem('third') || JSON.stringify(new DkpStat())
    );
  }

  save(key: string, value: DkpStat) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  calcScore(mode: number, second: DkpStat, first: DkpStat) {
    var t4k = (second.t4kills - first.t4kills) * 2;
    var t5k = (second.t5kills - first.t5kills) * 3;
    var t4d = (second.t4deaths - first.t4deaths) * 6;
    var t5d = (second.t5deaths - first.t5deaths) * 8;
    var score = +t4k + +t5k + +t4d + +t5d + +second.honor + +first.prekvk;
    var scoreP = (score / this.needed) * 100;
    if (mode === 1) {
      return score.toFixed(0);
    }
    if (mode === 2) {
      return (this.needed - score).toFixed(0);
    }
    if (mode === 3) {
      return ((17 / 100) * scoreP).toFixed(2);
    }
    if (mode === 4) {
      return scoreP.toFixed(2);
    }
    return '';
  }
}
