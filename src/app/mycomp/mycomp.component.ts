import { Component, OnInit } from '@angular/core';
import typy from '../typy.json';
import { User1 } from './klasy';
import { Game } from '../klasy2';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
})
export class MycompComponent implements OnInit {
  // User: User1 = typy;
  game: Game = typy;

  cegla: Cegla = {};
  myarray: number[] =[];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.User)

    // this.User.Turcja_Wlochy.

    // console.log(Object.keys(this.game)[1])
    // console.log(this.game['Nick'])
    // this.game.key
    let set = new Set<string>();

    // Object.keys(this.game)['Turcja_Wlochy']

    // console.log(this.game['Turcja_-_Wochy'])
    this.game['Turcja_-_Wochy'].forEach((element) => {
      set.add(element);
    });
    // let dupa1: Array<string>;
    
    let dupa = Array.from(set).sort();

    // console.log(dupa)

    dupa.forEach((elementSet) => {
      this.myarray = [];
      // console.log("leci po secie")

      this.game['Turcja_-_Wochy'].forEach((element, index) => {
        // console.log("leci po wynikach")

        if (elementSet == element) {
          // console.log("pushh"+ elementSet + element)
          this.myarray.push(index);
        }
      });
      this.cegla[elementSet] = this.myarray;
    });

    console.log(this.cegla);

    //Add values

    // console.log(set)
  }
}

export interface Cegla {
  [key: string]: number[];
}
